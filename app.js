const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Front-End Developer & UI/UX Trainee",

      about: `Computer Science student at King Saud University,
currently undergoing professional training at STC by Solutions.
Interested in UI/UX design and front-end development with a focus on modern user experiences.`,

      aboutImage: "images/OIP.webp",

      skills: [
        {
          title: "UI/UX Design",
          desc: "Designing intuitive and user-friendly interfaces."
        },
        {
          title: "Front-End Development",
          desc: "Building responsive web interfaces."
        }
      ],

      works: [
        {
          title: "Beauty Booking",
          desc: "Salon booking app UI/UX",
          image: "images/figma.png"
        },
        {
          title: "Student Nutrition",
          desc: "Web page for nutrition data",
          image: "images/front.jpg"
        },
        {
          title: "Graduation Project",
          desc: "Figma prototype",
          image: "images/figma2.png"
        }
      ],

      certificates: [
        "images/Image (2).jpg",
        "images/Image (4).jpg"
      ],

     
      phone: "+966502924487",
      linkedin: "https://www.linkedin.com/"
    };
  },

  methods: {
    downloadCV() {
      alert("Downloading CV 📄");
    },

    changeImage() {
      this.aboutImage = "images/front.jpg";
    }
  }  
}).mount("#app");