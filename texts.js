const TEXTS = {
  lv: {

    /* =====================
       STARTA LAPA (index)
    ====================== */
    parent_index: {
      title: "Vecāku anketa",
      intro:
        "Paldies, ka veltāt laiku. Aptauja ir anonīma un aizņem apmēram 3–5 minūtes. Jūsu atbildes palīdz uzlabot atbalstu bērniem un ģimenēm.",
      language_label: "Izvēlieties valodu",
      branch_label: "Izvēlieties filiāli",
      start_button: "Sākt anketu"
    },

    /* =====================
       KOPĪGIE TEKSTI
    ====================== */
    common: {
      next: "Tālāk",
      skip: "Izlaist",
      yes: "Jā",
      no: "Nē",
      thank_you_title: "Paldies!",
      thank_you_text:
        "Jūsu atbildes ir saņemtas. Tās palīdz mums veidot drošāku un atbalstošāku vidi bērniem un ģimenēm."
    },

    /* =====================
       JAUTĀJUMI
    ====================== */
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
            "Institūcijas darbinieks (audzinātājs, sociālais darbinieks u. c.)",
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
        }
      },

      environment_child_friendly: {
        text:
          "Vai kopumā Bērna mājā, Jūsuprāt, ir bērniem un jauniešiem draudzīga vide?",
        scale: {
          min: "Nemaz nav draudzīga",
          max: "Ļoti draudzīga"
        }
      },

      rooms_overall: {
        text:
          "Kā Jūs kopumā vērtējat Bērna mājas telpas kā atbilstošas un draudzīgas bērnam?",
        scale: {
          min: "Nedraudzīgas / neatbilstošas",
          max: "Ļoti piemērotas un draudzīgas"
        }
      },

      felt_safe: {
        text: "Cik droši Jūs pats(-i) jutāties Bērna mājā?",
        scale: {
          min: "Ļoti nedroši",
          max: "Pilnīgi droši"
        }
      },

      understood_process: {
        text:
          "Kā vērtējat darbinieku Jums sniegto informāciju — vai tā bija pietiekama un saprotama?",
        scale: {
          min: "Nebija pietiekama un saprotama",
          max: "Pilnībā pietiekama un saprotama"
        }
      },

      staff_attitude: {
        text: "Kā vērtējat darbinieku attieksmi pret Jums un bērnu?",
        scale: {
          min: "Nepietiekami iejūtīga",
          max: "Ļoti iejūtīga un cieņpilna"
        }
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
        }
      },

      general_comment: {
        text:
          "Ja vēlaties, varat dalīties ar savu pieredzi vai ieteikumiem",
        placeholder: "Jūsu komentārs (pēc izvēles)"
      }
    }
  }
};
