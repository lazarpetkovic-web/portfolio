/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  challenge: string;
  solution: string;
  techStack: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  galleryImages?: string[];
  tags: string[];
  link: string;
  category: string;
  caseStudy?: CaseStudy;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt: string;
}
