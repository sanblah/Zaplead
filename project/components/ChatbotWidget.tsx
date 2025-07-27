"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Zap, Send, Loader2 } from "lucide-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const API_KEY = "c2654cd7-766c-4609-8ba5-43652e57e476";
  const ASSISTANT_ID = "82278cbc-a997-4a80-956e-faccc0d97c51";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeSession = async () => {
    try {
      const chatSession = await fetch(
        'https://agentivehub.com/api/chat/session',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "api_key": API_KEY,
            "assistant_id": ASSISTANT_ID,
          })
        }
      );
      
      if (!chatSession.ok) {
        throw new Error('Failed to initialize session');
      }
      
      const sessionData = await chatSession.json();
      setSessionId(sessionData.session_id);
      
      // Add welcome message
      setMessages([{
        role: 'assistant',
        content: 'Hello! I\'m your ZapLead AI assistant. How can I help you today?',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Failed to initialize chat session:', error);
      setMessages([{
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting. Please try again later.',
        timestamp: new Date()
      }]);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || !sessionId) return;

    // Add user message to chat
    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const chatResponse = {
        api_key: API_KEY,
        session_id: sessionId,
        type: 'custom_code',
        assistant_id: ASSISTANT_ID,
        messages: [{ role: 'user', content: content.trim() }],
      };

      const chat = await fetch(
        'https://agentivehub.com/api/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(chatResponse)
        }
      );

      if (!chat.ok) {
        throw new Error('Failed to send message');
      }
      
      const chatData = await chat.json();

      // Add assistant response to chat
      const assistantMessage: Message = {
        role: 'assistant',
        content: chatData.message || chatData.content || 'I received your message but couldn\'t generate a response.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Failed to send message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your message. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !sessionId) {
      initializeSession();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot interface - only show when open */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl border overflow-hidden w-96 h-[500px] flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1 rounded">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">ZapLead Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleChatbot}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading || !sessionId}
                className="flex-1 text-sm"
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputValue.trim() || !sessionId}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <Button
        onClick={toggleChatbot}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
        size="lg"
      >
        <div className="flex flex-col items-center">
          <Zap className="w-5 h-5 text-white mb-0.5" />
          <span className="text-xs text-white font-medium opacity-90">Chat</span>
        </div>
      </Button>
    </div>
  );
}