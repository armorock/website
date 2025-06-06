'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COLORS, BUTTONS, HEADER, LAYOUT, TYPOGRAPHY, FORMS } from '@/styles';

export default function StyleGuide() {
  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-8 pt-20">Armorock Style Guide</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-[var(--primary)] text-white rounded">
            <p className="font-bold">Primary</p>
            <p className="text-sm">#BB2034</p>
          </div>
          <div className="p-6 bg-[var(--primary-dark)] text-white rounded">
            <p className="font-bold">Primary Dark</p>
            <p className="text-sm">#9D0000</p>
          </div>
          <div className="p-6 bg-[var(--secondary)] text-white rounded">
            <p className="font-bold">Secondary</p>
            <p className="text-sm">#20242A</p>
          </div>
          <div className="p-6 bg-[var(--tertiary)] text-white rounded">
            <p className="font-bold">Tertiary</p>
            <p className="text-sm">#7D7B7B</p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className={TYPOGRAPHY.headingLg}>Heading Large</h1>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.headingLg</p>
          </div>
          <div>
            <h2 className={TYPOGRAPHY.headingMd}>Heading Medium</h2>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.headingMd</p>
          </div>
          <div>
            <h3 className={TYPOGRAPHY.headingSm}>Heading Small</h3>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.headingSm</p>
          </div>
          <div>
            <p className={TYPOGRAPHY.subheading}>Subheading</p>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.subheading</p>
          </div>
          <div>
            <p className={TYPOGRAPHY.textLg}>
              This is large text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin ultricies, nisl et pulvinar euismod, arcu lectus hendrerit nisi.
            </p>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.textLg</p>
          </div>
          <div>
            <p className={TYPOGRAPHY.textMd}>
              This is medium text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Proin ultricies, nisl et pulvinar euismod, arcu lectus hendrerit nisi.
            </p>
            <p className="text-gray-500 mt-2">Class: TYPOGRAPHY.textMd</p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Buttons</h2>
        <div className="space-y-6">
          <div className="space-x-4">
            <button className="btn btn-primary">Primary Button</button>
            <p className="inline-block text-gray-500 ml-4">Class: btn btn-primary</p>
          </div>
          
          <div className="space-x-4 bg-gray-800 p-4 inline-block">
            <button className="btn btn-outline">Outline Button</button>
            <p className="inline-block text-gray-300 ml-4">Class: btn btn-outline</p>
          </div>
          
          <div className="space-x-4">
            <button className="btn btn-outline-red">Outline Red Button</button>
            <p className="inline-block text-gray-500 ml-4">Class: btn btn-outline-red</p>
          </div>
          
          <div className="space-x-4">
            <button className="quote-btn border-[#20242A] text-[#20242A] hover:bg-[#20242A] hover:text-white">
              GET A QUOTE
            </button>
            <p className="inline-block text-gray-500 ml-4">Class: quote-btn</p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Forms</h2>
        <div className="max-w-lg">
          <div className={FORMS.group}>
            <label className={FORMS.label}>Name</label>
            <input type="text" className={FORMS.input} placeholder="John Doe" />
          </div>
          
          <div className={FORMS.group}>
            <label className={FORMS.label}>Email</label>
            <input type="email" className={FORMS.input} placeholder="john@example.com" />
          </div>
          
          <div className={FORMS.group}>
            <label className={FORMS.label}>Message</label>
            <textarea className={FORMS.textarea} rows={4} placeholder="Your message..."></textarea>
          </div>
          
          <div className={FORMS.group}>
            <label className={FORMS.label}>Select an option</label>
            <select className={FORMS.select}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          
          <button className="btn btn-primary mt-4">Submit</button>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Layout</h2>
        <p className="mb-4">Container:</p>
        <div className="border border-gray-300 p-4 mb-8">
          <div className="bg-gray-100 p-4 text-center">
            <code>.container-custom</code>
            <p className="text-sm text-gray-500 mt-2">Max width with responsive padding</p>
          </div>
        </div>
        
        <p className="mb-4">Grid Layout Examples:</p>
        <div className={LAYOUT.grid2Cols + " mb-8"}>
          <div className="bg-gray-100 p-4 text-center">Column 1</div>
          <div className="bg-gray-200 p-4 text-center">Column 2</div>
        </div>
        
        <div className={LAYOUT.grid3Cols + " mb-8"}>
          <div className="bg-gray-100 p-4 text-center">Column 1</div>
          <div className="bg-gray-200 p-4 text-center">Column 2</div>
          <div className="bg-gray-300 p-4 text-center">Column 3</div>
        </div>
      </section>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link href="/" className="text-[var(--primary)] hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
