// ============================================================
// Expat — Checklists par pays
// ============================================================

var CHECKLIST_COMMUN = {
  administratif: [
    {phase:"avant",titre:"Acte de naissance plurilingue (CIEC)",details:"À demander à votre mairie de naissance.",delai:"2-3 semaines",lien:"https://www.service-public.fr/particuliers/vosdroits/F1429"},
    {phase:"avant",titre:"Acte de mariage plurilingue (si marié)",details:"Mairie du lieu de mariage.",delai:"2-3 semaines"},
    {phase:"avant",titre:"Acte de naissance des enfants (copie)",details:"Pour chaque enfant mineur.",delai:"2-3 semaines"},
    {phase:"avant",titre:"Passeport en cours de validité",details:"Vérifiez la date d'expiration.",delai:"3-6 semaines"},
    {phase:"avant",titre:"Carte nationale d'identité valide",details:"En complément du passeport.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Permis de conduire (+ permis international)",details:"Recommandé hors-UE.",delai:"2-3 semaines"},
    {phase:"avant",titre:"Casier judiciaire (bulletin n°3)",details:"Parfois demandé.",delai:"1-2 semaines",lien:"https://casier-judiciaire.justice.gouv.fr"},
    {phase:"avant",titre:"Diplômes et relevés de notes",details:"Originaux + copies."},
    {phase:"avant",titre:"Traduction assermentée des diplômes",details:"Si équivalence requise.",delai:"1-2 semaines",cout:"30-60 € par doc"},
    {phase:"avant",titre:"Relevé d'identité bancaire (RIB)",details:"Pour virements.",delai:"1 semaine"},
    {phase:"avant",titre:"Attestation de sécurité sociale",details:"Sur ameli.fr.",lien:"https://www.ameli.fr"},
    {phase:"avant",titre:"Copie des carnets de vaccination",details:"Vous et vos enfants."},
    {phase:"avant",titre:"Certificats scolaires des enfants",details:"Bulletins sur 2 ans.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Scanner tous les documents importants",details:"PDF + cloud + clé USB.",delai:"1 semaine"},
    {phase:"avant",titre:"Dossier papier de secours",details:"Copies en bagage cabine."},
    {phase:"avant",titre:"Liste de contacts d'urgence",details:"Famille, amis, consulat.",delai:"1 jour"},
    {phase:"avant",titre:"Procuration à un proche",details:"Démarches en France.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Changer les mots de passe sensibles",details:"Banque, impôts, messagerie.",delai:"1 semaine"},
    {phase:"avant",titre:"Activer la double authentification",details:"Partout où c'est possible.",delai:"1 semaine"}
  ],
  logement: [
    {phase:"avant",titre:"Vérifier le préavis du bail",details:"1 mois zone tendue, 3 mois sinon.",delai:"1 jour"},
    {phase:"avant",titre:"Envoyer le préavis (LRAR)",details:"Lettre recommandée.",delai:"1-3 mois"},
    {phase:"avant",titre:"État des lieux de sortie",details:"Avec photos détaillées.",delai:"1 jour"},
    {phase:"avant",titre:"Récupérer le dépôt de garantie",details:"Sous 1-2 mois.",delai:"1-2 mois"},
    {phase:"avant",titre:"Résilier l'assurance habitation",details:"LRAR + préavis 1 mois.",delai:"1 mois"},
    {phase:"avant",titre:"Résilier EDF / Engie",details:"Relevé de compteur.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier GRDF (gaz)",details:"Fermeture du compteur.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier le service de l'eau",details:"Régie ou Veolia/Suez.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier internet / box",details:"Retour matériel sous 2 semaines.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier le téléphone fixe",details:"Souvent inclus dans la box.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier les abonnements TV",details:"Canal+, Molotov…",delai:"1 mois"},
    {phase:"avant",titre:"Résilier Netflix/Spotify/Disney+",details:"Attention partages.",delai:"1 jour"},
    {phase:"avant",titre:"Résilier les magazines",details:"Courrier ou email.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Résilier la salle de sport",details:"Préavis 1-3 mois.",delai:"1-3 mois"},
    {phase:"avant",titre:"3 devis de déménageurs",details:"Comparez.",delai:"2-4 semaines",cout:"500-5000 €"},
    {phase:"avant",titre:"Réserver le déménageur",details:"4-8 semaines à l'avance.",delai:"1 semaine"},
    {phase:"avant",titre:"Inventaire des biens",details:"Pour assurance + douane.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Trier, vendre, donner",details:"Leboncoin, Emmaüs.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Stocker les affaires",details:"Proche ou garde-meuble.",delai:"2 semaines",cout:"50-200 €/mois"},
    {phase:"avant",titre:"Assurance déménagement",details:"Couvre le transport.",delai:"1-2 semaines",cout:"1-3 % de la valeur"},
    {phase:"avant",titre:"Réexpédition du courrier (La Poste)",details:"Vers l'étranger.",delai:"2 semaines",cout:"50-100 € / 6 mois",lien:"https://www.laposte.fr"},
    {phase:"avant",titre:"Changements d'adresse officiels",details:"Impôts, CPAM, CAF, banque.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Remise des clés + relevés compteurs",details:"Avec le propriétaire.",delai:"1 jour"},
    {phase:"arrivee",titre:"Recherche de logement",details:"Plateformes locales.",delai:"2-8 semaines"},
    {phase:"arrivee",titre:"Préparer dossier location",details:"Garant, justificatifs.",delai:"1-2 semaines"},
    {phase:"arrivee",titre:"Signature du bail",details:"Vérifiez les clauses.",delai:"1 jour"},
    {phase:"arrivee",titre:"État des lieux d'entrée",details:"Photos + écrit.",delai:"1 jour"},
    {phase:"arrivee",titre:"Assurance habitation locale",details:"Souvent obligatoire.",delai:"1-2 semaines",cout:"15-50 €/mois"},
    {phase:"arrivee",titre:"Ouverture des compteurs",details:"Électricité, eau, gaz.",delai:"1-3 semaines"},
    {phase:"arrivee",titre:"Inscription à la commune",details:"Obligatoire.",delai:"1-3 semaines"}
  ],
  sante: [
    {phase:"avant",titre:"Carte Européenne d'Assurance Maladie (CEAM)",details:"Gratuit sur ameli.fr.",delai:"15 jours",lien:"https://www.ameli.fr"},
    {phase:"avant",titre:"Formulaire S1 (retraités/inactifs)",details:"À demander à votre caisse.",delai:"1 mois"},
    {phase:"avant",titre:"Formulaire A1 (détachés)",details:"Via l'URSSAF.",delai:"3-4 semaines"},
    {phase:"avant",titre:"Formulaire U1/U2 (chômeurs)",details:"Export des droits.",delai:"2-3 semaines"},
    {phase:"avant",titre:"Formulaire E104 (périodes d'assurance)",details:"Utile dans certains pays.",delai:"1 mois"},
    {phase:"avant",titre:"Bilan médical complet",details:"Médecin traitant.",delai:"1-3 semaines"},
    {phase:"avant",titre:"RDV dentiste",details:"Soins avant départ.",delai:"2-6 semaines"},
    {phase:"avant",titre:"RDV ophtalmologue",details:"Ordonnances lunettes.",delai:"1-3 mois"},
    {phase:"avant",titre:"RDV gynécologue (femmes)",details:"Renouvellement ordonnances.",delai:"4-8 semaines"},
    {phase:"avant",titre:"RDV pédiatre (enfants)",details:"Bilan + vaccins.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Mise à jour des vaccins",details:"DTP, ROR, hépatites…",delai:"4-8 semaines"},
    {phase:"avant",titre:"Réserve de médicaments (3-6 mois)",details:"Traitements chroniques.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Ordonnances pour 6 mois",details:"Traitement long.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Traduction des ordonnances",details:"Utile à l'étranger.",delai:"1 semaine",cout:"30-50 € par doc"},
    {phase:"avant",titre:"Dossier médical complet",details:"Copies.",delai:"1 semaine"},
    {phase:"avant",titre:"Assurance santé voyage (transition)",details:"Couvre 1-3 mois.",delai:"1-2 semaines",cout:"50-300 €"},
    {phase:"avant",titre:"Assurance rapatriement",details:"Recommandée.",delai:"1 semaine",cout:"30-100 €"},
    {phase:"avant",titre:"Renouveler lunettes / lentilles",details:"2 paires si cher.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Vérifier la mutuelle française",details:"Couverture à l'étranger ?",delai:"1 semaine"}
  ],
  emploi: [
    {phase:"avant",titre:"Vérifier la convention fiscale",details:"Éviter double imposition.",delai:"2-4 semaines",lien:"https://www.impots.gouv.fr"},
    {phase:"avant",titre:"Consulter un expert-comptable international",details:"Situation complexe.",delai:"2-4 semaines",cout:"150-500 €"},
    {phase:"avant",titre:"Signaler votre départ à l'employeur",details:"Respectez le préavis.",delai:"1-3 mois"},
    {phase:"avant",titre:"Négocier un détachement (A1)",details:"Rester sous sécu française.",delai:"1-2 mois"},
    {phase:"avant",titre:"Homologuer les diplômes",details:"Métiers réglementés.",delai:"2-6 mois",cout:"100-300 €"},
    {phase:"avant",titre:"Adapter le CV au format local",details:"Usages locaux.",delai:"1 semaine"},
    {phase:"avant",titre:"Mettre à jour LinkedIn",details:"Localisation prévue.",delai:"1 jour"},
    {phase:"avant",titre:"Lettres de recommandation",details:"2-3 recommandations.",delai:"2-3 semaines"},
    {phase:"avant",titre:"Dossier de candidature international",details:"CV + lettre + diplômes.",delai:"2 semaines"},
    {phase:"avant",titre:"Étudier le marché local",details:"Secteurs porteurs, salaires.",delai:"1-2 semaines"}
  ],
  banque: [
    {phase:"avant",titre:"Prévenir votre banque du départ",details:"Éviter blocages.",delai:"1-2 semaines"},
    {phase:"avant",titre:"IBAN + BIC international",details:"Pour virements.",delai:"1 jour"},
    {phase:"avant",titre:"Vérifier frais carte à l'étranger",details:"Certaines banques 2-3 %.",delai:"1 semaine"},
    {phase:"avant",titre:"Compte multi-devises (Wise, Revolut, N26)",details:"Frais réduits.",delai:"1-3 jours",lien:"https://wise.com"},
    {phase:"avant",titre:"Bloquer les prélèvements inutiles",details:"Après résiliations.",delai:"1 semaine"},
    {phase:"avant",titre:"Décider du sort des livrets",details:"A, LDDS, LEP.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Décider du sort de l'assurance-vie",details:"Signalement assureur.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Décider du sort du PEA",details:"Conservation possible.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Récupérer identifiants bancaires",details:"Codes, mots de passe.",delai:"1 jour"},
    {phase:"avant",titre:"Annuler virements automatiques",details:"Électricité, loyer.",delai:"1 semaine"},
    {phase:"avant",titre:"Réserve d'espèces dans devise locale",details:"Pour premiers jours.",delai:"1 semaine"},
    {phase:"arrivee",titre:"Ouvrir un compte bancaire local",details:"Indispensable pour salaire.",delai:"1-2 semaines"},
    {phase:"arrivee",titre:"Virement initial France → pays",details:"Via Wise pour frais réduits.",delai:"1-3 jours"},
    {phase:"vie",titre:"Déclarer le compte aux impôts (formulaire 3916)",details:"Obligation annuelle.",delai:"Avril-juin",lien:"https://www.impots.gouv.fr"}
  ],
  telecom: [
    {phase:"avant",titre:"Résilier le forfait mobile",details:"Loi Chatel : 10 jours si hors engagement.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Résilier la box internet",details:"Retour matériel.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Décider du sort du numéro français",details:"Forfait low-cost possible.",delai:"1 semaine"},
    {phase:"avant",titre:"Résilier abonnements cloud",details:"Dropbox, Google One…",delai:"1 semaine"},
    {phase:"avant",titre:"Récupérer codes d'accès FAI",details:"Factures après résiliation.",delai:"1 jour"},
    {phase:"arrivee",titre:"Forfait mobile local",details:"Prépayé puis abonnement.",delai:"1 jour",cout:"10-40 €/mois"},
    {phase:"arrivee",titre:"Abonnement internet/fibre",details:"Vérifiez couverture.",delai:"1-3 semaines",cout:"25-50 €/mois"},
    {phase:"arrivee",titre:"Installer une app de traduction",details:"Google Translate, DeepL.",delai:"1 jour"}
  ],
  transport: [
    {phase:"avant",titre:"Décider : vendre / exporter / stocker la voiture",details:"Vendre est souvent le plus simple.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Contrôle technique si vente",details:"Obligatoire <6 mois.",delai:"1 semaine",cout:"~80 €"},
    {phase:"avant",titre:"Certificat de cession (Cerfa 15776)",details:"En ligne sur ANTS.",delai:"1 jour",lien:"https://www.ants.gouv.fr"},
    {phase:"avant",titre:"Résilier l'assurance auto",details:"LRAR.",delai:"1 mois"},
    {phase:"avant",titre:"Résilier l'abonnement transports",details:"Navigo, TCL…",delai:"1 semaine"},
    {phase:"avant",titre:"Résilier le télépéage",details:"Retour badge.",delai:"2 semaines"},
    {phase:"avant",titre:"Vendre/stocker vélos, trottinettes",details:"Leboncoin.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Récupérer dossier véhicule",details:"Carte grise, CT, factures.",delai:"1 jour"},
    {phase:"arrivee",titre:"Échange du permis de conduire",details:"Selon accords.",delai:"1-3 mois"},
    {phase:"arrivee",titre:"Assurance auto locale",details:"Obligatoire.",delai:"1-2 semaines"},
    {phase:"arrivee",titre:"Abonnement transports en commun local",details:"Métro, bus, tram.",delai:"1 jour"},
    {phase:"arrivee",titre:"Apps de mobilité locale",details:"Bolt, Uber, vélos.",delai:"1 jour"}
  ],
  quotidien: [
    {phase:"avant",titre:"Inscrire les enfants à l'école",details:"Anticipez !",delai:"2-6 mois"},
    {phase:"avant",titre:"Dossier scolaire",details:"Bulletins, radiation, vaccins.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Contacter l'académie pour transfert",details:"Radiation de l'établissement.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Rendre livres et matériels scolaires",details:"À l'école.",delai:"1 jour"},
    {phase:"avant",titre:"Arrêter les activités extrascolaires",details:"Musique, sport…",delai:"2 semaines"},
    {phase:"avant",titre:"Résilier la carte de bibliothèque",details:"Souvent automatique.",delai:"1 jour"},
    {phase:"avant",titre:"Récupérer dossiers médicaux scolaires",details:"Infirmerie.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Dossier « arrivée » par enfant",details:"Vaccins, contacts.",delai:"1 semaine"},
    {phase:"avant",titre:"Expliquer le déménagement aux enfants",details:"Les rassurer.",delai:"1-2 semaines"},
    {phase:"arrivee",titre:"Inscription définitive à l'école",details:"Adresse + justificatifs.",delai:"1-4 semaines"},
    {phase:"arrivee",titre:"Inscrire aux activités locales",details:"Sport, musique.",delai:"2-4 semaines"},
    {phase:"arrivee",titre:"Trouver un médecin de famille",details:"Listes d'attente.",delai:"1-8 semaines"},
    {phase:"arrivee",titre:"Repérer les commerces essentiels",details:"Supermarché, pharmacie.",delai:"1 semaine"},
    {phase:"arrivee",titre:"Cours de langue",details:"Si besoin.",delai:"2-4 semaines",cout:"150-500 €"},
    {phase:"vie",titre:"Rejoindre des groupes d'expatriés",details:"InterNations, Meetup.",delai:"Variable"},
    {phase:"vie",titre:"S'inscrire à la bibliothèque locale",details:"Souvent gratuit.",delai:"1 jour"}
  ],
  animaux: [
    {phase:"avant",titre:"Passeport européen de l'animal",details:"Chez le vétérinaire.",delai:"1-2 semaines",cout:"30-60 €"},
    {phase:"avant",titre:"Vaccin antirabique à jour",details:"21 jours avant départ.",delai:"1 mois",cout:"40-80 €"},
    {phase:"avant",titre:"Pucer l'animal",details:"Obligatoire pour passeport.",delai:"1 jour",cout:"50-100 €"},
    {phase:"avant",titre:"Traitement vermifuge (selon pays)",details:"RU, Irlande, Malte…",delai:"1-5 jours"},
    {phase:"avant",titre:"Certificat sanitaire vétérinaire",details:"Dans les 10 jours avant départ.",delai:"1 jour",cout:"30-50 €"},
    {phase:"avant",titre:"Réserver le transport",details:"Cage IATA + compagnie.",delai:"2-4 semaines",cout:"50-300 €"},
    {phase:"avant",titre:"Acheter cage IATA",details:"Adaptée à la taille.",delai:"1 semaine",cout:"40-150 €"},
    {phase:"avant",titre:"Règles du pays d'accueil",details:"Titre antirabique parfois requis.",delai:"2-4 semaines"},
    {phase:"arrivee",titre:"Enregistrer l'animal",details:"Selon pays/ville.",delai:"2-4 semaines"},
    {phase:"arrivee",titre:"Vétérinaire local",details:"Rappels + soins.",delai:"1-2 semaines"}
  ],
  divers: [
    {phase:"avant",titre:"Assurance santé voyage",details:"Transition.",delai:"1-2 semaines",cout:"50-300 €"},
    {phase:"avant",titre:"Résilier la mutuelle française",details:"Avec justificatif.",delai:"1-2 mois"},
    {phase:"avant",titre:"Résilier l'assurance décès",details:"Sauf internationale.",delai:"1 mois"},
    {phase:"avant",titre:"Résilier l'assurance emprunteur",details:"Attention crédits.",delai:"2-4 mois"},
    {phase:"avant",titre:"Résilier les cartes de fidélité",details:"Tri.",delai:"1 jour"},
    {phase:"avant",titre:"Résilier abonnements divers",details:"Liste exhaustive.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Inventaire complet des biens",details:"Photos + valeur.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Assurance déménagement",details:"Couvre le transport.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Faire un testament (recommandé)",details:"Si situation complexe.",delai:"2-4 semaines"},
    {phase:"avant",titre:"Déclaration de départ aux impôts",details:"Formulaire 2042-NR si non-résident.",delai:"2-4 semaines",lien:"https://www.impots.gouv.fr"},
    {phase:"avant",titre:"Virement initial vers pays d'accueil",details:"Wise / Revolut.",delai:"1-3 jours"},
    {phase:"avant",titre:"Transférer droits (chômage, retraite)",details:"Formulaires U1/U2.",delai:"1-2 mois"},
    {phase:"avant",titre:"Soirée d'adieu",details:"Garder les contacts.",delai:"1-2 semaines"},
    {phase:"avant",titre:"Carnet d'adresses (papier + num.)",details:"Famille, amis, contacts.",delai:"1 semaine"},
    {phase:"avant",titre:"Assurance responsabilité civile",details:"Souvent incluse.",delai:"2 semaines"},
    {phase:"avant",titre:"Dossier « arrivée » complet",details:"Copies en cabine.",delai:"1 semaine"},
    {phase:"avant",titre:"Copie des clés et codes",details:"Boîte aux lettres, coffre.",delai:"1 jour"},
    {phase:"vie",titre:"Renouveler papiers français (consulat)",details:"Anticipez 2-6 mois.",delai:"2-6 mois"},
    {phase:"vie",titre:"Inscription registre des Français",details:"Au consulat.",delai:"2-4 semaines",lien:"https://www.service-public.fr"}
  ]
};

var CHECKLIST_PAYS = {
  espagne: {
    administratif: [
      {phase:"arrivee",titre:"NIE — Numéro d'Identification d'Étranger",details:"Indispensable pour tout. RDV en ligne (cita previa).",delai:"3-6 semaines",cout:"~10 €",lien:"https://icp.administracionelectronica.gob.es"},
      {phase:"arrivee",titre:"Empadronamiento (inscription mairie)",details:"Registre des habitants.",delai:"1-2 semaines",cout:"Gratuit"},
      {phase:"arrivee",titre:"Certificat de Résidence UE (CRUE)",details:"Dans les 3 mois.",delai:"2-6 semaines",cout:"~12 €"},
      {phase:"arrivee",titre:"TIE (non-UE)",details:"Carte de résident.",delai:"1-3 mois"},
      {phase:"vie",titre:"Renouvellement NIE / TIE",details:"Avant expiration.",delai:"1-2 mois"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription Seguridad Social (NUSS)",details:"Via Import@ss.",delai:"1-2 semaines",lien:"https://portal.seg-social.gob.es"},
      {phase:"arrivee",titre:"Carte SIP (santé régionale)",details:"Au centro de salud.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Médecin traitant (médico de cabecera)",details:"Centro de salud.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Mutua colaboradora (si salarié)",details:"Accidents du travail.",delai:"1 semaine"}
    ],
    banque: [
      {phase:"arrivee",titre:"Compte bancaire espagnol",details:"NIE obligatoire.",delai:"1-2 semaines"}
    ],
    transport: [
      {phase:"arrivee",titre:"Échange du permis de conduire",details:"6 mois puis obligatoire.",delai:"1-2 mois",lien:"https://sede.dgt.gob.es"},
      {phase:"arrivee",titre:"Immatriculation véhicule",details:"ITV + taxes.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Assurance auto espagnole",details:"Obligatoire.",delai:"1 semaine"}
    ]
  },
  portugal: {
    administratif: [
      {phase:"arrivee",titre:"NIF — Numéro fiscal",details:"Aux Finanças.",delai:"1 jour-2 semaines",cout:"Gratuit",lien:"https://www.portaldasfinancas.gov.pt"},
      {phase:"arrivee",titre:"NISS — Sécurité sociale",details:"Pour travailler.",delai:"2-6 semaines",lien:"https://www.seg-social.pt"},
      {phase:"arrivee",titre:"Certificado de Registo UE",details:"À la mairie sous 30 jours.",delai:"1-2 semaines",cout:"~15 €"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription SNS (número de utente)",details:"Au centro de saúde.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Médecin de famille",details:"Listes d'attente.",delai:"2-8 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire portugais",details:"Millennium, CGD, Novo Banco.",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Assurance auto portugaise",details:"Obligatoire.",delai:"1 semaine"}
    ]
  },
  allemagne: {
    administratif: [
      {phase:"arrivee",titre:"Anmeldung (inscription mairie)",details:"Obligatoire sous 14 jours. Amende 1000 € si retard.",delai:"1-3 semaines",cout:"Gratuit"},
      {phase:"arrivee",titre:"Freibescheinigung EU/EWR",details:"Certificat libre circulation.",delai:"1-4 semaines",cout:"~12 €"},
      {phase:"arrivee",titre:"Steuer-ID (numéro fiscal)",details:"Envoyé après Anmeldung.",delai:"2-4 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Choix Krankenkasse",details:"TK, Barmer, AOK, DAK…",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Sozialversicherungsnummer",details:"Numéro assurance sociale.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Hausarzt (médecin généraliste)",details:"Inscription.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire allemand",details:"N26, DKB, Comdirect…",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 6 mois.",delai:"1-3 mois"},
      {phase:"arrivee",titre:"Umschreibung véhicule",details:"Zulassungsstelle + TÜV.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Deutschlandticket",details:"49 €/mois transports régionaux.",delai:"1 jour"}
    ]
  },
  belgique: {
    administratif: [
      {phase:"arrivee",titre:"Inscription commune (3 mois)",details:"Vous recevez annexe 19.",delai:"1-2 semaines",cout:"Gratuit"},
      {phase:"arrivee",titre:"Annexe 8 ou Carte A",details:"Après enquête police.",delai:"1-6 mois",cout:"~20 €"},
      {phase:"arrivee",titre:"NISS (registre national)",details:"À l'inscription.",delai:"Inclus"}
    ],
    sante: [
      {phase:"arrivee",titre:"Affiliation mutualité",details:"Solidaris, Partenamut, CAAMI…",delai:"1-2 semaines",cout:"Gratuit"},
      {phase:"arrivee",titre:"Médecin généraliste",details:"Inscription recommandée.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire belge",details:"Belfius, KBC, ING…",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire dans 2 ans.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Assurance auto belge",details:"Obligatoire.",delai:"1 semaine"}
    ]
  },
  paysbas: {
    administratif: [
      {phase:"arrivee",titre:"Inscription Gemeente (5 jours)",details:"Obligatoire pour séjours +4 mois.",delai:"1-3 semaines"},
      {phase:"arrivee",titre:"BSN (numéro citoyen)",details:"À l'inscription.",delai:"1-4 semaines"},
      {phase:"arrivee",titre:"DigiD (identité numérique)",details:"Indispensable démarches en ligne.",delai:"1-2 semaines",lien:"https://www.digid.nl"}
    ],
    sante: [
      {phase:"arrivee",titre:"Zorgverzekering (assurance santé)",details:"Obligatoire sous 4 mois.",delai:"1 mois",cout:"~130 €/mois"},
      {phase:"arrivee",titre:"Zorgtoeslag (aide)",details:"Selon revenus.",delai:"2-4 semaines",lien:"https://www.toeslagen.nl"},
      {phase:"arrivee",titre:"Huisarts (médecin)",details:"Listes d'attente.",delai:"2-8 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire néerlandais",details:"ING, Rabobank, ABN…",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"RDW.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"OV-chipkaart",details:"Transport public.",delai:"1 jour"}
    ]
  },
  italie: {
    administratif: [
      {phase:"arrivee",titre:"Codice Fiscale",details:"Indispensable.",delai:"1 jour",cout:"Gratuit",lien:"https://www.agenziaentrate.gov.it"},
      {phase:"arrivee",titre:"Iscrizione anagrafica",details:"À la commune.",delai:"1-4 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription SSN",details:"À l'ASL locale.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Tessera Sanitaria",details:"Après SSN.",delai:"2-6 semaines"},
      {phase:"arrivee",titre:"Médecin traitant (medico di base)",details:"Indispensable.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire italien",details:"Intesa Sanpaolo, UniCredit…",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-3 mois"}
    ]
  },
  irlande: {
    administratif: [
      {phase:"arrivee",titre:"PPS Number",details:"Indispensable pour travailler.",delai:"2-6 semaines",lien:"https://www.gov.ie"},
      {phase:"arrivee",titre:"Registre des résidents UE",details:"Si +3 mois.",delai:"1-4 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription GP",details:"Pour accéder aux soins.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Medical Card ou GP Visit Card",details:"Selon éligibilité.",delai:"2-8 semaines",lien:"https://www2.hse.ie/services/medical-cards/"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire irlandais",details:"AIB, Bank of Ireland, Ulster.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-2 mois"}]
  },
  suisse: {
    administratif: [
      {phase:"arrivee",titre:"Annonce à la commune",details:"Dans les 14 jours.",delai:"1-3 semaines",cout:"~65 CHF"},
      {phase:"arrivee",titre:"Permis de séjour (B, L, G ou C)",details:"Selon situation.",delai:"2-6 semaines"},
      {phase:"arrivee",titre:"Numéro AVS",details:"Assurance vieillesse.",delai:"1-2 mois"}
    ],
    sante: [
      {phase:"arrivee",titre:"Assurance LAMal",details:"Obligatoire sous 3 mois.",delai:"1 mois",cout:"250-450 CHF/mois"},
      {phase:"arrivee",titre:"Médecin traitant",details:"Recommandé.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire suisse",details:"UBS, PostFinance, Raiffeisen.",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Dans 12 mois.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Abonnement CFF",details:"Demi-tarif ou AG.",delai:"1 jour"}
    ]
  },
  canada: {
    administratif: [
      {phase:"arrivee",titre:"NAS — Numéro d'Assurance Sociale",details:"9 chiffres, gratuit.",delai:"Immédiat-20 jours",cout:"Gratuit",lien:"https://www.canada.ca"},
      {phase:"arrivee",titre:"Valider la CRP",details:"À l'aéroport.",delai:"Immédiat"},
      {phase:"arrivee",titre:"Carte de résident permanent",details:"Par la poste.",delai:"4-8 semaines"},
      {phase:"arrivee",titre:"Permis de conduire provincial",details:"Échange possible.",delai:"1-3 mois"}
    ],
    sante: [
      {phase:"arrivee",titre:"Carte RAMQ / OHIP / MSP",details:"Carence 3 mois possible.",delai:"1-3 mois"},
      {phase:"arrivee",titre:"Médecin de famille",details:"Listes d'attente longues.",delai:"1-6 mois"},
      {phase:"arrivee",titre:"Assurance médicaments (employeur)",details:"Souvent via emploi.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire canadien",details:"RBC, TD, BMO, Desjardins.",delai:"1-2 semaines"}],
    transport: [
      {phase:"arrivee",titre:"Échange permis de conduire",details:"Selon province.",delai:"1-3 mois"},
      {phase:"arrivee",titre:"Assurance auto provinciale",details:"Publique ou privée.",delai:"1-2 semaines"}
    ]
  },
  royaumeuni: {
    administratif: [
      {phase:"arrivee",titre:"National Insurance Number (NINO)",details:"Pour travailler.",delai:"2-6 semaines",lien:"https://www.gov.uk/apply-national-insurance-number"},
      {phase:"arrivee",titre:"BRP ou eVisa",details:"À récupérer/activer.",delai:"Immédiat"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription GP",details:"Pour accéder au NHS.",delai:"1-2 semaines",lien:"https://www.nhs.uk"},
      {phase:"arrivee",titre:"NHS number",details:"À l'inscription GP.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire britannique",details:"Barclays, HSBC, Monzo.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Selon visa.",delai:"1-3 mois"}]
  },
  autriche: {
    administratif: [
      {phase:"arrivee",titre:"Meldezettel (inscription mairie)",details:"Sous 3 jours.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Anmeldebescheinigung UE",details:"Certificat libre circulation.",delai:"2-4 semaines",cout:"~15 €"}
    ],
    sante: [
      {phase:"arrivee",titre:"e-card (assurance maladie)",details:"Via employeur ou WGKK.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Médecin traitant (Hausarzt)",details:"Inscription.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire autrichien",details:"Erste Bank, Raiffeisen, Bank Austria.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 6 mois.",delai:"1-2 mois"}]
  },
  luxembourg: {
    administratif: [
      {phase:"arrivee",titre:"Déclaration d'arrivée commune",details:"Sous 8 jours.",delai:"1-2 jours",cout:"Gratuit"},
      {phase:"arrivee",titre:"Carte de séjour UE",details:"À la commune.",delai:"2-4 semaines",cout:"~80 €"}
    ],
    sante: [
      {phase:"arrivee",titre:"Affiliation CNS",details:"Sécurité sociale.",delai:"1-2 semaines",lien:"https://cns.public.lu"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire luxembourgeois",details:"BGL, BCEE, ING Lux.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 12 mois.",delai:"1-2 mois"}]
  },
  danemark: {
    administratif: [
      {phase:"arrivee",titre:"CPR number (registre civil)",details:"Indispensable pour tout.",delai:"1-3 semaines",lien:"https://www.borger.dk"},
      {phase:"arrivee",titre:"EU-opholdsbevis",details:"Carte de séjour UE.",delai:"1-4 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Carte santé jaune (sundhedskort)",details:"Envoyée au domicile.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Médecin de famille (læge)",details:"Obligatoire de choisir.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire danois",details:"Danske Bank, Nordea.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 3 ans.",delai:"1-2 mois"}]
  },
  suede: {
    administratif: [
      {phase:"arrivee",titre:"Personnummer (numéro personnel)",details:"Skatteverket.",delai:"2-6 semaines",lien:"https://www.skatteverket.se"},
      {phase:"arrivee",titre:"Carte de séjour UE",details:"Migrationsverket.",delai:"2-6 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription au centre de santé",details:"Vårdcentral.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Personbevis (extrait registre)",details:"Preuve d'identité.",delai:"1 jour"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire suédois",details:"Swedbank, SEB, Handelsbanken.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 1 an.",delai:"1-2 mois"}]
  },
  norvege: {
    administratif: [
      {phase:"arrivee",titre:"Enregistrement au registre (folkeregisteret)",details:"Skatteetaten.",delai:"1-3 semaines"},
      {phase:"arrivee",titre:"D-nummer / personnummer",details:"Numéro fiscal.",delai:"1-3 semaines"}
    ],
    sante: [{phase:"arrivee",titre:"Carte santé + médecin",details:"Fastlege (médecin fixe).",delai:"1-4 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire norvégien",details:"DNB, Nordea, SpareBank.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Obligatoire sous 1 an.",delai:"1-2 mois"}]
  },
  grece: {
    administratif: [
      {phase:"arrivee",titre:"AFM (numéro fiscal grec)",details:"Aux impôts (DOY).",delai:"1-3 semaines"},
      {phase:"arrivee",titre:"AMKA (numéro sécurité sociale)",details:"Avec AMKA.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Carte de résidence UE",details:"Au bureau des étrangers.",delai:"1-3 mois"}
    ],
    sante: [{phase:"arrivee",titre:"Carte santé grecque (IKA/EFKA)",details:"Après AMKA.",delai:"2-6 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire grec",details:"Alpha, Eurobank, Piraeus.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-3 mois"}]
  },
  pologne: {
    administratif: [
      {phase:"arrivee",titre:"PESEL (numéro d'identification)",details:"Indispensable pour tout.",delai:"1-2 semaines",cout:"Gratuit"},
      {phase:"arrivee",titre:"Carte de séjour UE",details:"À l'Urząd Wojewódzki.",delai:"2-6 semaines"}
    ],
    sante: [{phase:"arrivee",titre:"Inscription NFZ",details:"Sécurité sociale.",delai:"1-2 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire polonais",details:"PKO, Pekao, mBank.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-3 mois"}]
  },
  republique_tcheque: {
    administratif: [
      {phase:"arrivee",titre:"Rodné číslo (numéro de naissance)",details:"Pour étrangers.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Carte de séjour UE",details:"Au ministère de l'Intérieur.",delai:"2-6 semaines"}
    ],
    sante: [{phase:"arrivee",titre:"Assurance santé publique",details:"Via employeur.",delai:"1-2 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire tchèque",details:"ČSOB, Komerční banka, Fio.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-3 mois"}]
  },
  etatsunis: {
    administratif: [
      {phase:"avant",titre:"Visa (J-1, H-1B, O-1, etc.)",details:"Entretien à l'ambassade.",delai:"2-12 mois"},
      {phase:"arrivee",titre:"Social Security Number (SSN)",details:"Indispensable pour travailler.",delai:"2-6 semaines",lien:"https://www.ssa.gov"},
      {phase:"arrivee",titre:"Green Card ou I-94",details:"Selon statut.",delai:"Variable"},
      {phase:"arrivee",titre:"Permis de conduire d'État",details:"Différent par État.",delai:"1-3 mois"}
    ],
    sante: [
      {phase:"avant",titre:"Assurance santé internationale",details:"OBLIGATOIRE — le système US est très cher.",delai:"2-4 semaines",cout:"100-1000 $/mois"},
      {phase:"arrivee",titre:"Assurance santé via employeur (si applicable)",details:"Inscription immédiate.",delai:"1-2 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire américain",details:"Chase, BoA, Wells Fargo, Citi.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire d'État",details:"Différent par État.",delai:"1-3 mois"}]
  },
  maroc: {
    administratif: [
      {phase:"avant",titre:"Visa (si séjour +90 jours)",details:"Selon statut.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Carte de séjour (carte de résidence)",details:"À la préfecture.",delai:"1-3 mois"},
      {phase:"arrivee",titre:"Inscription consulat France",details:"À Rabat, Casablanca, Marrakech…",delai:"2-4 semaines"}
    ],
    sante: [
      {phase:"avant",titre:"Assurance santé internationale",details:"Vivant souvent exigeante.",delai:"2-4 semaines",cout:"50-300 €/mois"},
      {phase:"arrivee",titre:"Inscription CNSS (si salarié)",details:"Sécurité sociale marocaine.",delai:"2-6 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire marocain",details:"Attijariwafa, BMCE, Banque Populaire.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible sous conditions.",delai:"1-2 mois"}]
  },
  senegal: {
    administratif: [
      {phase:"avant",titre:"Visa (si +90 jours)",details:"Selon statut.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Carte d'étranger",details:"À la police.",delai:"1-2 mois"}
    ],
    sante: [
      {phase:"avant",titre:"Vaccin fièvre jaune",details:"Obligatoire.",delai:"2 semaines"},
      {phase:"avant",titre:"Traitement antipaludéen (optionnel)",details:"Selon zone.",delai:"1-2 semaines"},
      {phase:"avant",titre:"Assurance santé internationale",details:"Recommandée.",delai:"2-4 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire sénégalais",details:"CBAO, Ecobank, SGBS.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Échange permis de conduire",details:"Possible.",delai:"1-2 mois"}]
  },
  japon: {
    administratif: [
      {phase:"avant",titre:"Visa / Certificate of Eligibility",details:"Procédure longue.",delai:"1-3 mois"},
      {phase:"arrivee",titre:"Carte de résident (在留カード)",details:"À l'arrivée.",delai:"Immédiat"},
      {phase:"arrivee",titre:"Enregistrement à la mairie (転入届)",details:"Sous 14 jours.",delai:"1-2 semaines"}
    ],
    sante: [
      {phase:"arrivee",titre:"Inscription assurance santé nationale (国民健康保険)",details:"À la mairie.",delai:"1-2 semaines",cout:"~2000-4000 ¥/mois"},
      {phase:"arrivee",titre:"Carte My Number",details:"Numéro d'identification.",delai:"2-4 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire japonais",details:"Japan Post Bank, MUFG, SMBC.",delai:"1-3 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire japonais",details:"Traduction + épreuve.",delai:"1-3 mois"}]
  },
  thailande: {
    administratif: [
      {phase:"avant",titre:"Visa (selon statut)",details:"Touristique, Non-B, retraite…",delai:"2-8 semaines"},
      {phase:"arrivee",titre:"Extension de séjour",details:"Au bureau d'immigration.",delai:"1-2 semaines"}
    ],
    sante: [{phase:"avant",titre:"Assurance santé internationale",details:"Recommandée fortement.",delai:"2-4 semaines",cout:"50-200 €/mois"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire thaïlandais",details:"Bangkok Bank, Kasikorn.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire thaïlandais",details:"Traduction + test.",delai:"1-2 mois"}]
  },
  emirats: {
    administratif: [
      {phase:"avant",titre:"Visa de travail (sponsorisé)",details:"Par l'employeur.",delai:"1-2 mois"},
      {phase:"arrivee",titre:"Emirates ID",details:"Carte d'identité.",delai:"2-4 semaines"},
      {phase:"arrivee",titre:"Residence visa",details:"Sur passeport.",delai:"1-2 mois"}
    ],
    sante: [
      {phase:"arrivee",titre:"Assurance santé (via employeur)",details:"Obligatoire.",delai:"1-2 semaines"},
      {phase:"arrivee",titre:"Health Card (Abu Dhabi) / carte DHA (Dubaï)",details:"Selon émirat.",delai:"2-4 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire émirien",details:"Emirates NBD, ADCB, FAB.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire émirien",details:"Échange possible.",delai:"1-2 mois"}]
  },
  australie: {
    administratif: [
      {phase:"avant",titre:"Visa (WHV, Skilled, Student…)",details:"En ligne sur immi.homeaffairs.",delai:"2-6 mois",lien:"https://immi.homeaffairs.gov.au"},
      {phase:"arrivee",titre:"TFN (Tax File Number)",details:"Indispensable pour travailler.",delai:"2-4 semaines",lien:"https://www.ato.gov.au"},
      {phase:"arrivee",titre:"Medicare (si éligible)",details:"Accord avec certains pays.",delai:"1-4 semaines"}
    ],
    sante: [
      {phase:"avant",titre:"Assurance santé voyage/OVHC",details:"Obligatoire pour certains visas.",delai:"2-4 semaines",cout:"50-200 €/mois"},
      {phase:"arrivee",titre:"Medicare ou assurance privée",details:"Selon statut.",delai:"1-4 semaines"}
    ],
    banque: [{phase:"arrivee",titre:"Compte bancaire australien",details:"Commonwealth, ANZ, NAB, Westpac.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire australien",details:"Selon État.",delai:"1-3 mois"}]
  },
  nouvellezelande: {
    administratif: [
      {phase:"avant",titre:"Visa (WHV, Skilled, Student…)",details:"En ligne.",delai:"1-4 mois",lien:"https://www.immigration.govt.nz"},
      {phase:"arrivee",titre:"IRD number (numéro fiscal)",details:"Pour travailler.",delai:"2-4 semaines"}
    ],
    sante: [{phase:"avant",titre:"Assurance santé voyage",details:"Recommandée.",delai:"2-4 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire néo-zélandais",details:"ANZ, ASB, Westpac, BNZ.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire NZ",details:"Traduction ou conversion.",delai:"1-3 mois"}]
  },
  bresil: {
    administratif: [
      {phase:"avant",titre:"Visa (si +90 jours)",details:"Selon statut.",delai:"2-8 semaines"},
      {phase:"arrivee",titre:"CPF (numéro fiscal)",details:"Indispensable pour tout.",delai:"1-3 semaines"},
      {phase:"arrivee",titre:"RNM / CRNM (carte de résident)",details:"Police fédérale.",delai:"1-3 mois"}
    ],
    sante: [{phase:"arrivee",titre:"SUS (système santé public)",details:"Accès universel.",delai:"1-4 semaines"}],
    banque: [{phase:"arrivee",titre:"Compte bancaire brésilien",details:"Itaú, Bradesco, Banco do Brasil.",delai:"1-2 semaines"}],
    transport: [{phase:"arrivee",titre:"Permis de conduire brésilien",details:"Conversion possible.",delai:"1-3 mois"}]
  }
};

function getDemarchesForPays(paysKey) {
  var all = [];
  for (var cat in CHECKLIST_COMMUN) {
    for (var i = 0; i < CHECKLIST_COMMUN[cat].length; i++) {
      var d = CHECKLIST_COMMUN[cat][i];
      all.push({
        phase: d.phase, titre: d.titre, details: d.details || "",
        delai: d.delai || null, cout: d.cout || null, lien: d.lien || null,
        categorie: cat
      });
    }
  }
  var spec = CHECKLIST_PAYS[paysKey] || {};
  for (var cat2 in spec) {
    for (var j = 0; j < spec[cat2].length; j++) {
      var d2 = spec[cat2][j];
      all.push({
        phase: d2.phase, titre: d2.titre, details: d2.details || "",
        delai: d2.delai || null, cout: d2.cout || null, lien: d2.lien || null,
        categorie: cat2
      });
    }
  }
  return all;
}