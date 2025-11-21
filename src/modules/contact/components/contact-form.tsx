'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form, FormItem, FormField, FormControl, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { contact_form_schema, IContactFormValues } from '../validators'

export const ContactForm = () => {
  const form = useForm<IContactFormValues>({
    resolver: zodResolver(contact_form_schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      message: '',
      email: '',
      phone: '',
    },
  })

  const onSubmit = (values: IContactFormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative size-full overflow-hidden rounded-sm">
                  <Textarea
                    className="size-full h-[140px] resize-none"
                    placeholder="Message"
                    {...field}
                  />

                  <div className="absolute -right-[100px] -bottom-[100px] hidden h-[150px] w-[280px] bg-[#4F21C5] blur-[130px] lg:block" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="relative w-full overflow-hidden rounded-sm bg-[#4F21C5] text-white"
          hasAnimation={false}
          type="submit"
        >
          Submit Form
          <div className="absolute -right-[130px] -bottom-20 hidden h-[150px] w-[280px] bg-white blur-[80px] lg:block" />
        </Button>
      </form>
    </Form>
  )
}
