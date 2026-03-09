import React from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-container relative">
            <div className="text-center mb-16">
                <h2 className="heading-2">Get in <span className="text-primary">Touch</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass-card p-8 flex items-center space-x-6">
                        <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                            <Mail size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Email Me</h3>
                            <p className="text-muted-foreground">prajapatijaydip591@gmail.com</p>
                        </div>
                    </div>

                    <div className="glass-card p-8 flex items-center space-x-6">
                        <div className="bg-secondary/10 p-4 rounded-2xl text-secondary">
                            <Github size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">GitHub</h3>
                            <a href="https://github.com/jaydip591" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                jaydip591
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-8 flex items-center space-x-6">
                        <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                            <Linkedin size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/jaydip-prajapati-bbb920226/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                Jaydip Prajapati
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-card p-8"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                                <input type="text" className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                                <input type="email" className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                            <textarea rows="4" className="w-full glass bg-transparent px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
