const TEXTS = {
  lv: {

    parent_index: {
      title: "Vecāku anketa",
      intro:
        "Paldies, ka veltāt laiku. Aptauja ir anonīma un aizņem apmēram 3–5 minūtes. Jūsu atbildes palīdz uzlabot atbalstu bērniem un ģimenēm.",
      language_label: "Izvēlieties valodu",
      branch_label: "Izvēlieties filiāli",
      start_button: "Sākt anketu"
    },

    common: {
      next: "Tālāk",
      skip: "Izlaist",
      yes: "Jā",
      no: "Nē",
      thank_you_title: "Paldies!",
      thank_you_text:
        "Jūsu atbildes ir saņemtas. Tās palīdz mums veidot drošāku un atbalstošāku vidi bērniem un ģimenēm.",
      scale_hint: "Ja vēlaties, varat precizēt atbildi, pavelkot skalu",
      scale_arrows: "← pavelciet →",
      sending: "Nosūtam…",
      coming_soon: "Drīzumā"
    },

    questions: {

      relation_to_child: {
        text: "Kāda ir Jūsu saikne ar bērnu?",
        type: "single",
        options: {
          mother: "Māte",
          father: "Tēvs",
          guardian: "Aizbildnis",
          foster_parent: "Audžuvecāks",
          orphan_court: "Bāriņtiesa",
          institution_worker:
            "Institūcijas darbinieks",
          other: "Cits"
        },
        other_placeholder: "Lūdzu, norādiet precīzāk"
      },

      age_group: {
        text: "Kāds ir bērna vecums?",
        type: "single",
        options: {
          "4-7": "4–7 gadi",
          "8-12": "8–12 gadi",
          "13-18": "13–18 gadi"
        }
      },

      processes: {
        text: "Kādos procesos bērns piedalījās Bērna mājā?",
        type: "multi",
        options: {
          investigative_interview: "Nopratināšana",
          interview: "Intervija (izpētes intervija)",
          medical_examination: "Medicīniskā ekspertīze",
          pediatric_examination: "Pediatra apskate",
          gynecological_examination: "Ginekologa apskate",
          other: "Cits"
        },
        other_placeholder: "Lūdzu, norādiet precīzāk"
      },

      felt_overall: {
        text: "Kā Jūs kopumā jutāties pie mums Bērna mājā?",
        scale: {
          min: "Ļoti slikti",
          max: "Ļoti labi"
        },

        quick_options: [
          { label: "Ļoti slikti", value: 1 },
          { label: "Drīzāk slikti", value: 3 },
          { label: "Neitrāli", value: 5 },
          { label: "Drīzāk labi", value: 8 },
          { label: "Ļoti labi", value: 10 }
        ]
      },

      environment_child_friendly: {
        text:
          "Vai kopumā Bērna mājā, Jūsuprāt, ir bērniem un jauniešiem draudzīga vide?",
        scale: {
          min: "Nemaz nav draudzīga",
          max: "Ļoti draudzīga"
        },

        quick_options: [
          { label: "Nemaz nav draudzīga", value: 1 },
          { label: "Drīzāk nedraudzīga", value: 3 },
          { label: "Vidēji draudzīga", value: 5 },
          { label: "Drīzāk draudzīga", value: 8 },
          { label: "Ļoti draudzīga", value: 10 }
        ]
      },

      rooms_overall: {
        text:
          "Kā Jūs kopumā vērtējat Bērna mājas telpas kā atbilstošas un draudzīgas bērnam?",
        scale: {
          min: "Nedraudzīgas / neatbilstošas",
          max: "Ļoti piemērotas un draudzīgas"
        },

        quick_options: [
          { label: "Nedraudzīgas", value: 1 },
          { label: "Drīzāk neatbilstošas", value: 3 },
          { label: "Vidējas", value: 5 },
          { label: "Drīzāk piemērotas", value: 8 },
          { label: "Ļoti piemērotas", value: 10 }
        ]

      },

      felt_safe: {
        text: "Cik droši Jūs pats(-i) jutāties Bērna mājā?",
        scale: {
          min: "Ļoti nedroši",
          max: "Pilnīgi droši"
        },

        quick_options: [
          { label: "Ļoti nedroši", value: 1 },
          { label: "Drīzāk nedroši", value: 3 },
          { label: "Neitrāli", value: 5 },
          { label: "Drīzāk droši", value: 8 },
          { label: "Pilnīgi droši", value: 10 }
        ]

      },

      understood_process: {
        text:
          "Kā vērtējat darbinieku Jums sniegto informāciju — vai tā bija pietiekama un saprotama?",
        scale: {
          min: "Nebija pietiekama un saprotama",
          max: "Pilnībā pietiekama un saprotama"
        },
        quick_options: [
          { label: "Nebija saprotama", value: 1 },
          { label: "Drīzāk nesaprotama", value: 3 },
          { label: "Daļēji saprotama", value: 5 },
          { label: "Drīzāk saprotama", value: 8 },
          { label: "Pilnīgi saprotama", value: 10 }
        ]

      },

      staff_attitude: {
        text: "Kā vērtējat darbinieku attieksmi pret Jums un bērnu?",
        scale: {
          min: "Nepietiekami iejūtīga",
          max: "Ļoti iejūtīga un cieņpilna"
        },
        quick_options: [
          { label: "Nepietiekami iejūtīga", value: 1 },
          { label: "Drīzāk neiejūtīga", value: 3 },
          { label: "Neitrāla", value: 5 },
          { label: "Drīzāk iejūtīga", value: 8 },
          { label: "Ļoti iejūtīga", value: 10 }
        ]

      },

      participated_in_interview: {
        text: "Vai Jūs piedalījāties nopratināšanas novērošanā?"
      },

      interview_safeness: {
        text:
          "Cik droša un saudzīga Jūsuprāt bija nopratināšana bērnam?",
        scale: {
          min: "Ļoti nesaudzīga",
          max: "Ļoti saudzīga"
        },
        quick_options: [
          { label: "Ļoti nesaudzīga", value: 1 },
          { label: "Drīzāk nesaudzīga", value: 3 },
          { label: "Vidēji saudzīga", value: 5 },
          { label: "Drīzāk saudzīga", value: 8 },
          { label: "Ļoti saudzīga", value: 10 }
        ]

      },

      general_comment: {
        text:
          "Ja vēlaties, varat dalīties ar savu pieredzi vai ieteikumiem",
        placeholder: "Jūsu komentārs (pēc izvēles)"
      }


    }
  },

  ru: {

    parent_index: {
      title: "Анкета для родителей",
      intro:
        "Спасибо, что нашли время. Опрос является анонимным и занимает примерно 3–5 минут. Ваши ответы помогают улучшить поддержку детей и семей.",
      language_label: "Выберите язык",
      branch_label: "Выберите филиал",
      start_button: "Начать анкету",
    },

    common: {
      next: "Далее",
      skip: "Пропустить",
      yes: "Да",
      no: "Нет",
      thank_you_title: "Спасибо!",
      thank_you_text:
        "Ваши ответы получены. Они помогают нам создавать более безопасную и поддерживающую среду для детей и семей.",
      scale_hint: "При желании вы можете уточнить ответ, передвигая шкалу",
      scale_arrows: "← проведите →",
      sending: "Отправляем…",
      coming_soon: "Вскоре",
    },

    questions: {

      relation_to_child: {
        text: "Кем Вы приходитесь ребёнку?",
        type: "single",
        options: {
          mother: "Мать",
          father: "Отец",
          guardian: "Опекун",
          foster_parent: "Приёмный родитель",
          orphan_court: "Сиротский суд",
          institution_worker:
            "Сотрудник учреждения",
          other: "Другое"
        },
        other_placeholder: "Пожалуйста, уточните"
      },

      age_group: {
        text: "Каков возраст ребёнка?",
        type: "single",
        options: {
          "4-7": "4–7 лет",
          "8-12": "8–12 лет",
          "13-18": "13–18 лет"
        }
      },

      processes: {
        text: "В каких процессах ребёнок участвовал в Бērna māja?",
        type: "multi",
        options: {
          investigative_interview: "Допрос",
          interview: "Интервью (оценочное интервью)",
          medical_examination: "Медицинская экспертиза",
          pediatric_examination: "Осмотр педиатра",
          gynecological_examination: "Гинекологический осмотр",
          other: "Другое"
        },
        other_placeholder: "Пожалуйста, уточните"
      },

      felt_overall: {
        text: "Как Вы в целом чувствовали себя, находясь в Bērna māja?",
        scale: {
          min: "Очень плохо",
          max: "Очень хорошо"
        },

        quick_options: [
          { label: "Очень плохо", value: 1 },
          { label: "Скорее плохо", value: 3 },
          { label: "Нейтрально", value: 5 },
          { label: "Скорее хорошо", value: 8 },
          { label: "Очень хорошо", value: 10 }
        ]
      },

      environment_child_friendly: {
        text:
          "Считаете ли Вы, что в Bērna māja создана дружественная среда для детей и подростков?",
        scale: {
          min: "Совсем недружественная",
          max: "Очень дружественная"
        },

        quick_options: [
          { label: "Совсем недружественная", value: 1 },
          { label: "Скорее недружественная", value: 3 },
          { label: "Умеренно дружественная", value: 5 },
          { label: "Скорее дружественная", value: 8 },
          { label: "Очень дружественная", value: 10 }
        ]
      },

      rooms_overall: {
        text:
          "Как Вы в целом оцениваете помещения Bērna māja с точки зрения их соответствия и дружественности для ребёнка?",
        scale: {
          min: "Недружественные / неподходящие",
          max: "Очень подходящие и дружественные"
        },

        quick_options: [
          { label: "Недружественные", value: 1 },
          { label: "Скорее неподходящие", value: 3 },
          { label: "Средние", value: 5 },
          { label: "Скорее подходящие", value: 8 },
          { label: "Очень подходящие", value: 10 }
        ]

      },

      felt_safe: {
        text: "Насколько безопасно Вы сами чувствовали себя в Bērna māja?",
        scale: {
          min: "Очень небезопасно",
          max: "Полностью безопасно"
        },

        quick_options: [
          { label: "Очень небезопасно", value: 1 },
          { label: "Скорее небезопасно", value: 3 },
          { label: "Нейтрально", value: 5 },
          { label: "Скорее безопасно", value: 8 },
          { label: "Полностью безопасно", value: 10 }
        ]

      },

      understood_process: {
        text:
          "Как Вы оцениваете информацию, предоставленную сотрудниками — была ли она достаточной и понятной?",
        scale: {
          min: "Недостаточная и непонятная",
          max: "Полностью достаточная и понятная"
        },
        quick_options: [
          { label: "Непонятная", value: 1 },
          { label: "Скорее непонятная", value: 3 },
          { label: "Частично понятная", value: 5 },
          { label: "Скорее понятная", value: 8 },
          { label: "Полностью понятная", value: 10 }
        ]

      },

      staff_attitude: {
        text: "Как Вы оцениваете отношение сотрудников к Вам и ребёнку?",
        scale: {
          min: "Недостаточно чуткое",
          max: "Очень чуткое и уважительное"
        },
        quick_options: [
          { label: "Недостаточно чуткое", value: 1 },
          { label: "Скорее нечуткое", value: 3 },
          { label: "Нейтральное", value: 5 },
          { label: "Скорее чуткое", value: 8 },
          { label: "Очень чуткое", value: 10 }
        ]

      },

      participated_in_interview: {
        text: "Принимали ли Вы участие в наблюдении за допросом?"
      },

      interview_safeness: {
        text:
          "Насколько, по Вашему мнению, допрос был безопасным и бережным для ребёнка?",
        scale: {
          min: "Очень небезопасный",
          max: "Очень бережный"
        },
        quick_options: [
          { label: "Очень небезопасный", value: 1 },
          { label: "Скорее небезопасный", value: 3 },
          { label: "Умеренно бережный", value: 5 },
          { label: "Скорее бережный", value: 8 },
          { label: "Очень бережный", value: 10 }
        ]

      },

      general_comment: {
        text:
          "При желании Вы можете поделиться своим опытом или рекомендациями",
        placeholder: "Ваш комментарий (по желанию)"
      }

    }
  },

  en: {

    parent_index: {
      title: "Parent Survey",
      intro:
        "Thank you for taking the time to participate. This survey is anonymous and takes approximately 3–5 minutes. Your answers help us improve support for children and families.",
      language_label: "Select language",
      branch_label: "Select branch",
      start_button: "Start survey"
    },

    common: {
      next: "Next",
      skip: "Skip",
      yes: "Yes",
      no: "No",
      thank_you_title: "Thank you!",
      thank_you_text:
        "Your responses have been received. They help us create a safer and more supportive environment for children and families.",
      scale_hint: "If you wish, you can refine your answer by adjusting the scale",
      scale_arrows: "← drag →",
      sending: "Sending…",
      coming_soon: "Soon"
    },

    questions: {

      relation_to_child: {
        text: "What is your relationship to the child?",
        type: "single",
        options: {
          mother: "Mother",
          father: "Father",
          guardian: "Legal guardian",
          foster_parent: "Foster parent",
          orphan_court: "Orphans’ Court",
          institution_worker:
            "Institution staff member",
          other: "Other"
        },
        other_placeholder: "Please specify"
      },

      age_group: {
        text: "What is the child’s age?",
        type: "single",
        options: {
          "4-7": "4–7 years",
          "8-12": "8–12 years",
          "13-18": "13–18 years"
        }
      },

      processes: {
        text: "Which processes did the child participate in at Bērna māja?",
        type: "multi",
        options: {
          investigative_interview: "Investigative interview",
          interview: "Interview (assessment interview)",
          medical_examination: "Medical examination",
          pediatric_examination: "Pediatric examination",
          gynecological_examination: "Gynecological examination",
          other: "Other"
        },
        other_placeholder: "Please specify"
      },

      felt_overall: {
        text: "How did you feel overall during your visit to Bērna māja?",
        scale: {
          min: "Very bad",
          max: "Very good"
        },

        quick_options: [
          { label: "Very bad", value: 1 },
          { label: "Rather bad", value: 3 },
          { label: "Neutral", value: 5 },
          { label: "Rather good", value: 8 },
          { label: "Very good", value: 10 }
        ]
      },

      environment_child_friendly: {
        text:
          "In your opinion, is Bērna māja a child- and youth-friendly environment?",
        scale: {
          min: "Not friendly at all",
          max: "Very friendly"
        },

        quick_options: [
          { label: "Not friendly at all", value: 1 },
          { label: "Rather unfriendly", value: 3 },
          { label: "Moderately friendly", value: 5 },
          { label: "Rather friendly", value: 8 },
          { label: "Very friendly", value: 10 }
        ]
      },

      rooms_overall: {
        text:
          "How do you overall evaluate the premises of Bērna māja in terms of suitability and child-friendliness?",
        scale: {
          min: "Unsuitable / not child-friendly",
          max: "Very suitable and child-friendly"
        },

        quick_options: [
          { label: "Unsuitable", value: 1 },
          { label: "Rather unsuitable", value: 3 },
          { label: "Average", value: 5 },
          { label: "Rather suitable", value: 8 },
          { label: "Very suitable", value: 10 }
        ]

      },

      felt_safe: {
        text: "How safe did you personally feel at Bērna māja?",
        scale: {
          min: "Very unsafe",
          max: "Completely safe"
        },

        quick_options: [
          { label: "Very unsafe", value: 1 },
          { label: "Rather unsafe", value: 3 },
          { label: "Neutral", value: 5 },
          { label: "Rather safe", value: 8 },
          { label: "Completely safe", value: 10 }
        ]

      },

      understood_process: {
        text:
          "How do you evaluate the information provided by staff — was it sufficient and clear?",
        scale: {
          min: "Insufficient and unclear",
          max: "Fully sufficient and clear"
        },
        quick_options: [
          { label: "Unclear", value: 1 },
          { label: "Rather unclear", value: 3 },
          { label: "Partially clear", value: 5 },
          { label: "Rather clear", value: 8 },
          { label: "Completely clear", value: 10 }
        ]

      },

      staff_attitude: {
        text: "How do you evaluate the staff’s attitude towards you and the child?",
        scale: {
          min: "Insufficiently empathetic",
          max: "Very empathetic and respectful"
        },
        quick_options: [
          { label: "Insufficiently empathetic", value: 1 },
          { label: "Rather unempathetic", value: 3 },
          { label: "Neutral", value: 5 },
          { label: "Rather empathetic", value: 8 },
          { label: "Very empathetic", value: 10 }
        ]

      },

      participated_in_interview: {
        text: "Did you participate in observing the investigative interview?"
      },

      interview_safeness: {
        text:
          "In your opinion, how safe and considerate was the interview for the child?",
        scale: {
          min: "Very unsafe",
          max: "Very considerate"
        },
        quick_options: [
          { label: "Very unsafe", value: 1 },
          { label: "Rather unsafe", value: 3 },
          { label: "Moderately considerate", value: 5 },
          { label: "Rather considerate", value: 8 },
          { label: "Very considerate", value: 10 }
        ]

      },

      general_comment: {
        text:
          "If you wish, you may share your experience or suggestions",
        placeholder: "Your comment (optional)"
      }

    }
  }

};

