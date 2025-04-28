import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Contact <span className="text-green-600 dark:text-green-500">Me</span>
          </h2>
          <div className="mt-1 h-1 w-24 bg-green-600 dark:bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="md:col-span-1 space-y-6">

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 text-center">Connect With Me</h3>
                    <div className="flex items-center justify-between max-w-xs mx-auto w-full">
                        <a 
                        href="https://x.com/ayew_pelle" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                        aria-label=" X (formally Twitter)"
                        >
                        <Twitter size={20} className="text-green-600 dark:text-green-500" />
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/joy-owusu-ansah" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                        aria-label="LinkedIn"
                        >
                        <Linkedin size={20} className="text-green-600 dark:text-green-500" />
                        </a>
                        <a 
                        href="https://github.com/aduuuna" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                        aria-label="GitHub"
                        >
                        <Github size={20} className="text-green-600 dark:text-green-500" />
                        </a>
                        <a 
                        href="https://www.youtube.com/@ayew_pelle" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors"
                        aria-label="Youtube"
                        >
                        <Youtube size={20} className="text-green-600 dark:text-green-500" />
                        </a>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <Mail size={24} className="text-green-600 dark:text-green-500" />
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Email</h3>
                    <a href="mailto:owusujoyansah@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                        owusujoyansah@gmail.com
                    </a>
                    </div>
                </div>
                </div>
            
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">

                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <Phone size={24} className="text-green-600 dark:text-green-500" />
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Phone</h3>
                    <a href="tel:+233541035604" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors">
                        +233 541 035 604
                    </a>
                    </div>
                </div>
                </div>
            
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-green-600 dark:text-green-500" />
                    </div>
                    <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Accra, Ghana
                    </p>
                    </div>
                </div>
                </div>
            </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I&#39;ll get back to you as soon as possible.</p>
              </div>
            ) : error ? (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
                <p className="font-medium">Something went wrong!</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition-colors`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition-colors`}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition-colors`}
                  placeholder="Subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 transition-colors`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded-md transition-colors flex items-center justify-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}