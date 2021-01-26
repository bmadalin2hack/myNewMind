import { mapGetters } from "vuex";
export default {
  user: mapGetters.user,
  articles: [
    {
      name: "MentalHealth",
      slug: "mentalHealth",
      image: "healthymind.jpg",
      id: 1,
      description:
        "Mental health is the psychological, social and meotional wellbeing of an individual. In this section you will find research, news and studies about most common mental health concerns.Mental health problems can be cause by many unreleated various causes, some internal and some from an external environment. Internal causes can be things like brain chemestry, trauma, work stress, self esteem etc.. External causes cand be provoked by substance abuse, bullying, unhealthy lifestyle, discrimination, money problems and much more",
      topics: [
        {
          name: "Anxiety",
          slug: "anxiety",
          image: "anxiety.jpg",
          description:
            "Anxiety is your body’s natural response to stress. It’s a feeling of fear or apprehension about what’s to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous.But if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder."
        },
        {
          name: "ADHD",
          slug: "adhd",
          image: "Brain-Cells.jpg",
          description:
            "Anxiety is your body’s natural response to stress. It’s a feeling of fear or apprehension about what’s to come. The first day of school, going to a job interview, or giving a speech may cause most people to feel fearful and nervous.But if your feelings of anxiety are extreme, last for longer than six months, and are interfering with your life, you may have an anxiety disorder."
        },
        {
          name: "Depression",
          slug: "depression",
          image: "2breain.jpeg",
          description:
            "Depression is commonly found alongside other mental health issues, but easily treatable if found early."
        },
        {
          name: "Stress",
          slug: "bipolar",
          image: "bipolar.jpg",
          description:
            "Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you feel frustrated, angry, or nervous. Stress is your body`s reaction to a challenge or demand. In short bursts, stress can be positive, such as when it helps you avoid danger or meet a deadline."
        }
      ]
    },
    {
      name: "Know Yourself",
      slug: "knowYourself",
      image: "spirituality.jpeg",
      id: 2,
      description:
        "In this section you will find ways to tackle in a natural way problems of the mind",
      topics: [
        {
          name: "Teachings",
          slug: "spirituality-city",
          image: "teaching.jpeg",
          description:
            "Find here the best advices for the world problems today and philosophies"
        },
        {
          name: "Meditation",
          slug: "Spirituality-canal",
          image: "index.png",
          description:
            "Meditation is one of the most useful ways to deal with minor mental health issues"
        },
        {
          name: "Yoga",
          slug: "yoga",
          image: "yogic.png",
          description:
            "Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. "
        },
        {
          slug: "Spirituality",
          image: "mbs.png",
          description:
            "Spirituality can be defined broadly as a sense of connection to something higher than ourselves. Many people search for meaning in their lives. The sense of transcendence experienced in spirituality is a universal experience. Some find it in monotheistic religion, while others find it in meditation"
        }
      ]
    },
    {
      name: "Food for Thought",
      slug: "foodForThought",
      image: "abs.jpeg",
      id: 3,
      description:
        "Food for thought topic discuses the issues of taking care of our bodies as a tample because a healthy body and mind is neccesary for our overall well being",
      topics: [
        {
          name: "Natural Remedies",
          slug: "natural-remedies",
          image: "natural.jpeg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Nutrition",
          slug: "healthy-recepies",
          image: "healthyrece.jpeg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Workouts",
          slug: "workouts",
          image: "dudework.png",
          description:
            "Local gyms Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Relax",
          slug: "breathing",
          image: "breath.jpeg",
          description:
            "Relaxing the mind is something that society nowdays is missing. Society now sees as escaping from day to day life just in weekends and holidays, but we need to relax everyday in order to be healthy and have a clear mind. "
        }
      ]
    }
  ]
};
