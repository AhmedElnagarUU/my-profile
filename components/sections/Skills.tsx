import { Card } from "@/components/ui/card";
import { Code2, Database, Layout, Server, Settings2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { GrGraphQl } from "react-icons/gr";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiJenkins,
  SiGooglecloud,
  SiOracle,
  SiMysql,
  SiRedux,
  SiFramer,
  SiRadixui,
  SiCheckmarx,
  SiSonarqube,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiCss3 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "GraphQL", icon: GrGraphQl },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiOracle },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiGooglecloud },
    ],
  },
  {
    category: "DevOps",
    icon: Settings2,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: SiAmazon },
      { name: "CI/CD", icon: SiJenkins },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    category: "Libraries & Tools",
    icon: Settings2,
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Security",
    icon: ShieldCheck,
    skills: [
      { name: "Checkmarx", icon: SiCheckmarx },
      { name: "SonarQube", icon: SiSonarqube },
      { name: "OWASP", icon: ShieldCheck },
      { name: "Secure Coding Practices", icon: ShieldCheck },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Expertise
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.category} variants={item}>
                <Card className="p-6 hover:shadow-lg transition-shadow glass-card">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map(({ name, icon: SkillIcon }) => (
                      <li
                        key={name}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <SkillIcon className="w-5 h-5 text-primary" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
