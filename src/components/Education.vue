<script>
import PaceImage from "@/assets/Images/Pace.png";
import NyitImage from "@/assets/Images/Nyit.png";
import ATRIImage from "@/assets/Images/ATRI.png";

export default {
  name: "Education",
  data() {
    return {
      education: [
        {
          img: PaceImage,
          institution: "Pace University, Seidenberg School of Computer Science and Information Systems",
          degree: "PhD in Computer Science (Focus: Artificial Intelligence & Systems)",
          year: "Expected 2030",
        },
        {
          img: NyitImage,
          institution: "New York Institute of Technology",
          degree: "Master of Science in Computer & Information Sciences | GPA: 3.27",
          year: "2024",
        },
        {
          img: ATRIImage,
          institution: "Aurora Technological and Research Institute",
          degree: "Bachelor of Technology in Computer Science & Engineering | GPA: 3.52",
          year: "2020",
        }
      ],
    };
  },
};
</script>