// ============================================================
// Expat — Base de connaissances par pays
// Version 2.0 — Données enrichies, mises à jour 2026
// ============================================================

const PAYS_DATA = {
  espagne: {
    nom: "Espagne",
    flag: "🇪🇸",
    systeme_sante: {
      nom: "Sistema Nacional de Salud (SNS)",
      lien_officiel: "https://www.sanidad.gob.es",
      inscription: {
        procedure: "Demande du Número de la Seguridad Social (NUSS) via le portail Import@ss, puis inscription au SNS auprès du centro de salud.",
        documents_requis: [
          "NIE (Numéro d'Identification d'Étranger) — original et copie",
          "Formulaire TA.1 (Solicitud de Número de la Seguridad Social) rempli en espagnol",
          "Passeport en cours de validité (pages de données + cachet d'entrée)",
          "Certificado de Empadronamiento (justificatif d'inscription à la mairie)",
          "Formulaire S1 (pour les retraités et inactifs) ou contrat de travail"
        ],
        lien_inscription: "https://portal.seg-social.gob.es/wps/portal/importass/importass/tramites/solicitarNumeroSeguridadSocial"
      }
    },
    mutuelles: [
      {
        nom: "Mutua Colaboradora (Mutua Madrileña, Fremap, Asepeyo, etc.)",
        description: "Obligatoire pour les travailleurs indépendants (autónomos) et les salariés pour la couverture des accidents du travail et maladies professionnelles.",
        lien_officiel: "https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/36537",
        documents_specifiques: [
          "Document d'identité (DNI ou NIE)",
          "Numéro d'affiliation à la Sécurité Sociale (NUSS)",
          "IBAN pour les prélèvements",
          "Base de cotisation choisie"
        ]
      }
    ],
    liens_utiles: {
      securite_sociale: "https://www.seg-social.es",
      sante: "https://www.sanidad.gob.es",
      immigration: "https://extranjeros.inclusion.gob.es"
    }
  },

  portugal: {
    nom: "Portugal",
    flag: "🇵🇹",
    systeme_sante: {
      nom: "Serviço Nacional de Saúde (SNS)",
      lien_officiel: "https://www.sns.gov.pt",
      inscription: {
        procedure: "Obtention du NIF (numéro fiscal), puis du NISS (sécurité sociale), puis inscription au centro de saúde pour obtenir le número de utente.",
        documents_requis: [
          "NIF (Numéro d'Identification Fiscale)",
          "CRUE (Certificado de Registo de Cidadão da UE)",
          "Passeport ou carte d'identité nationale UE",
          "Justificatif de domicile au Portugal",
          "Formulaire S1 (pour les retraités et inactifs)"
        ],
        lien_inscription: "https://www.seg-social.pt"
      }
    },
    mutuelles: [],
    notes: "Pas de mutuelle privée obligatoire. Le SNS est le système public.",
    liens_utiles: {
      sante: "https://www.sns.gov.pt",
      securite_sociale: "https://www.seg-social.pt",
      fiscalite: "https://www.portaldasfinancas.gov.pt"
    }
  },

  allemagne: {
    nom: "Allemagne",
    flag: "🇩🇪",
    systeme_sante: {
      nom: "Gesetzliche Krankenversicherung (GKV)",
      lien_officiel: "https://www.gkv-spitzenverband.de",
      inscription: {
        procedure: "Après l'Anmeldung, vous devez choisir une caisse d'assurance maladie publique (Krankenkasse) dans les 3 mois suivant votre arrivée.",
        documents_requis: [
          "Anmeldebestätigung (confirmation d'enregistrement à la mairie)",
          "Passeport ou carte d'identité",
          "Contrat de travail ou preuve d'inscription universitaire",
          "Numéro d'assurance sociale (Sozialversicherungsnummer) — souvent demandé"
        ],
        lien_inscription: "https://www.gkv-spitzenverband.de/krankenversicherung/krankenversicherung.jsp"
      }
    },
    mutuelles: [
      {
        nom: "Krankenkassen publiques (TK, Barmer, AOK, DAK, etc.)",
        description: "Obligatoire pour la plupart des salariés. Choix libre parmi les caisses publiques.",
        lien_officiel: "https://www.gkv-spitzenverband.de",
        documents_specifiques: [
          "Anmeldebestätigung",
          "Passeport",
          "Contrat de travail"
        ]
      },
      {
        nom: "Assurances privées (pour indépendants, étudiants, hauts revenus)",
        description: "Alternative à la GKV dans certains cas.",
        lien_officiel: "https://www.pkv.de"
      }
    ],
    liens_utiles: {
      sante: "https://www.bundesgesundheitsministerium.de",
      securite_sociale: "https://www.deutsche-rentenversicherung.de",
      fiscalite: "https://www.bundesfinanzministerium.de"
    }
  },

  belgique: {
    nom: "Belgique",
    flag: "🇧🇪",
    systeme_sante: {
      nom: "Assurance maladie-invalidité (INAMI/RIZIV)",
      lien_officiel: "https://www.inami.fgov.be/fr",
      inscription: {
        procedure: "Inscription à une mutualité ou à la CAAMI dans les 3 mois suivant l'arrivée. Le formulaire S1 est nécessaire pour les retraités et inactifs.",
        documents_requis: [
          "Passeport ou carte d'identité nationale",
          "Preuve d'inscription à la commune (annexe 19 ou carte A)",
          "Formulaire S1 (pour les retraités et inactifs)",
          "Formulaire E104 ou EHIC (pour faire valoir les périodes d'assurance antérieures)",
          "IBAN belge"
        ],
        lien_inscription: "https://www.inami.fgov.be/fr/consommateurs/Pages/assurance-maladie/inscription-mutuelle.aspx"
      }
    },
    mutuelles: [
      {
        nom: "Mutualités (Solidaris, Partenamut, Mutualité Chrétienne, etc.)",
        description: "Affiliation obligatoire à une mutualité pour bénéficier de l'assurance maladie. Le choix est libre.",
        lien_officiel: "https://www.inami.fgov.be/fr",
        documents_specifiques: [
          "Passeport ou carte d'identité",
          "Preuve d'inscription à la commune",
          "Formulaire S1 ou E104",
          "IBAN belge"
        ]
      },
      {
        nom: "CAAMI (Caisse Auxiliaire d'Assurance Maladie-Invalidité)",
        description: "Alternative aux mutualités privées.",
        lien_officiel: "https://www.caami-hziv.fgov.be"
      }
    ],
    liens_utiles: {
      sante: "https://www.health.belgium.be/fr",
      securite_sociale: "https://www.socialsecurity.be",
      fiscalite: "https://finances.belgium.be"
    }
  },

  canada: {
    nom: "Canada",
    flag: "🇨🇦",
    systeme_sante: {
      nom: "RAMQ (Québec) / OHIP (Ontario) / MSP (Colombie-Britannique)",
      lien_officiel: "https://www.ramq.gouv.qc.ca",
      inscription: {
        procedure: "Inscription à la RAMQ (ou équivalent provincial) dès votre arrivée. Un délai de carence de 3 mois peut s'appliquer dans certaines provinces.",
        documents_requis: [
          "Formulaire d'inscription SE-401-Q-13 (Québec)",
          "Passeport valide",
          "Confirmation de Résidence Permanente (CRP) ou permis de travail/études valide (≥ 6 mois)",
          "Preuve de résidence au Québec (bail, facture)",
          "Lettre de l'employeur ou contrat de travail (pour les travailleurs temporaires)"
        ],
        lien_inscription: "https://www.ramq.gouv.qc.ca/fr/citoyens/assurance-maladie/inscription"
      }
    },
    mutuelles: [],
    notes: "Pas de mutuelle privée obligatoire. L'assurance maladie provinciale est le système public.",
    liens_utiles: {
      sante: "https://www.canada.ca/fr/sante-publique.html",
      immigration: "https://www.canada.ca/fr/immigration-refugies-citoyennete.html"
    }
  },

  royaumeuni: {
    nom: "Royaume-Uni",
    flag: "🇬🇧",
    systeme_sante: {
      nom: "National Health Service (NHS)",
      lien_officiel: "https://www.nhs.uk",
      inscription: {
        procedure: "Inscription auprès d'un General Practitioner (GP) dès votre arrivée. Le NHS est financé par l'impôt, pas de cotisation supplémentaire si vous avez un visa avec IHS payé.",
        documents_requis: [
          "Passeport (recommandé)",
          "BRP (Biometric Residence Permit) ou eVisa (recommandé)",
          "Justificatif de domicile (bail, facture)",
          "Lettre d'inscription universitaire (pour les étudiants)"
        ],
        lien_inscription: "https://www.nhs.uk/nhs-services/gps/how-to-register-with-a-gp-surgery/"
      }
    },
    mutuelles: [],
    notes: "Le NHS est gratuit à l'usage. Pas de mutuelle obligatoire.",
    liens_utiles: {
      sante: "https://www.nhs.uk",
      travail: "https://www.gov.uk/national-insurance",
      fiscalite: "https://www.gov.uk/income-tax"
    }
  }
};