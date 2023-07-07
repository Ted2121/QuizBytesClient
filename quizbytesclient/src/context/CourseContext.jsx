import { createContext, useState } from 'react';

export const CourseContext = createContext({});

export const CourseProvider = ({ children }) => {
    const [course, setCourse] = useState(null);
    
    return (
        <CourseContext.Provider value={{ course, setCourse }}>
          {children}
        </CourseContext.Provider>
      );
    };