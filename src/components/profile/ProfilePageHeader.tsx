
import React from "react";

export default function ProfilePageHeader() {
  return (
    <div className="mb-8 mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2">
        My <span className="primary-text-gradient">Professional Profile</span>
      </h1>
      <p className="text-muted-foreground md:text-lg">
        Showcase your skills, experience, and achievements
      </p>
    </div>
  );
}
