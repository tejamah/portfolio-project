<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          category: "Programming Languages",
          icon: "fas fa-code",
          list: [
            "Java",
            "Python",
            "JavaScript",
            "TypeScript",
            "SQL",
            "Ruby"
          ],
        },
        {
          category: "Frameworks",
          icon: "fas fa-layer-group",
          list: [
            "Spring Boot",
            "FastAPI",
            "Flask",
            "React",
            "Vue.js",
            "LangChain"
          ],
        },
        {
          category: "Database Management",
          icon: "fas fa-database",
          list: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "DynamoDB"
          ],
        },
        {
          category: "Software & DevOps Tools",
          icon: "fas fa-tools",
          list: [
            "AWS",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "MLflow",
            "Airflow"
          ],
        },
        {
          category: "AI / Machine Learning",
          icon: "fas fa-brain",
          list: [
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "Hugging Face",
            "LLM Fine-tuning (LoRA)",
            "Retrieval-Augmented Generation (RAG)"
          ],
        },
        {
          category: "Operating Systems",
          icon: "fas fa-desktop",
          list: [
            "Linux",
            "Unix",
            "Windows"
          ],
        },
      ],
    };
  },
};
</script> 