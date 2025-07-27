@@ .. @@
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
-      const chatResponse = {
+      const chatRequestBody = {
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
-          body: JSON.stringify(chatResponse)
+          body: JSON.stringify(chatRequestBody)
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