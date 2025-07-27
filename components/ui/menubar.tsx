@@ .. @@
 const MenubarShortcut = ({
   className,
   ...props
 }: React.HTMLAttributes<HTMLSpanElement>) => {
   return (
     <span
       className={cn(
         'ml-auto text-xs tracking-widest text-muted-foreground',
         className
       )}
       {...props}
     />
   );
 };
-MenubarShortcut.displayname = 'MenubarShortcut';
+MenubarShortcut.displayName = 'MenubarShortcut';