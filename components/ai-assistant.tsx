'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, X, MessageCircle, Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  })

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(e)
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:kimcruz019@gmail.com'
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
          aria-label="Open AI Assistant"
        >
          <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-full sm:w-96 h-screen sm:h-[600px] flex flex-col border-primary/20 shadow-2xl bg-card mx-0 sm:mx-0 rounded-none sm:rounded-lg">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <h3 className="font-semibold text-foreground">Maria&apos;s AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-secondary rounded-md transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-3">
                <MessageCircle className="h-12 w-12 text-primary/30" />
                <div>
                  <p className="font-medium text-foreground">Welcome!</p>
                  <p className="text-sm text-muted-foreground">
                    Ask me about Maria&apos;s skills, projects, or experience.
                  </p>
                </div>
              </div>
            ) : (
              messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.parts && Array.isArray(message.parts)
                      ? message.parts
                          .filter(
                            (p: any): p is { type: 'text'; text: string } =>
                              p.type === 'text'
                          )
                          .map((p) => p.text)
                          .join('')
                      : message.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-lg px-3 py-2 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-100" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce delay-200" />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="border-t border-border p-3 flex gap-2 flex-col">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                size="icon"
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="w-full gap-2 text-sm"
            >
              <Mail className="h-4 w-4" />
              Send Email to Maria
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
