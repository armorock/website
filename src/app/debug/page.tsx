'use client';

import { useEffect, useState } from 'react';
import styles from '@/components/layout/header.module.css';

export default function DebugPage() {
  const [cssClasses, setCssClasses] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract all the CSS classes from the module
    const classes = Object.keys(styles);
    setCssClasses(classes);
  }, []);

  return (
    <div className="p-8 pt-32">
      <h1 className="text-2xl font-bold mb-6">CSS Module Debug</h1>
      
      <h2 className="text-xl font-bold mb-4">Available CSS Classes in header.module.css:</h2>
      <pre className="bg-gray-100 p-4 rounded mb-8">
        {JSON.stringify(styles, null, 2)}
      </pre>
      
      <h2 className="text-xl font-bold mb-4">Class Names:</h2>
      <ul className="list-disc pl-6">
        {cssClasses.map((className) => (
          <li key={className}>
            {className}: <code>{(styles as any)[className]}</code>
          </li>
        ))}
      </ul>
      
      <h2 className="text-xl font-bold mt-8 mb-4">Sample Nav Link:</h2>
      <div className="bg-white p-6 border rounded">
        <a className={styles.navLink}>About Us</a> (navLink class)
      </div>
      <div className="bg-white p-6 border rounded mt-2">
        <a className={styles.navLinkDark}>Products</a> (navLinkDark class)
      </div>
      <div className="bg-gray-800 p-6 border rounded mt-2">
        <a className={styles.navLinkLight}>Contact</a> (navLinkLight class)
      </div>
    </div>
  );
}
