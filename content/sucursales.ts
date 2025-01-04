type Sucursal = {
  name: string;
  address: string;
  phone: number;
  map: string;
  facebook: string;
  instagram: string;
};

const sucursales: Sucursal[] = [
  {
    name: "Belén de Escobar",
    address: "Estrada 1089, Belén de Escobar",
    phone: 5491158106098,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.0875854827536!2d-58.79908742949629!3d-34.34824893895952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61bb9aa48859%3A0x3fcd9a190d815725!2sHELADOS%20QUEEN%20ESCOBAR!5e0!3m2!1ses-419!2sar!4v1733681588941!5m2!1ses-419!2sar",
    facebook: "https://www.facebook.com/queeescobarok/",
    instagram: "https://www.instagram.com/queenheladeria/",
  },
  {
    name: "Garín",
    address: "Av. Gral. Belgrano 100 LOCAL 7, Garín",
    phone: 5491149600636,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.170782031286!2d-58.736233624302834!3d-34.422416847945875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca1e171b6983f%3A0x7ac53d36a54d1b9b!2sHELADOS%20QUEEN%20GARIN!5e0!3m2!1ses-419!2sar!4v1733693422056!5m2!1ses-419!2sar",
    facebook: "https://www.facebook.com/heladosqueengarin/",
    instagram: "https://www.instagram.com/queenheladosgarin/",
  },
  {
    name: "Del Viso",
    address: "Independencia 6980, Del Viso",
    phone: 5491123358189,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.970596200532!2d-58.80132151692419!3d-34.45289427993671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbca6f791087%3A0xe148158c8f8cbffe!2sHELADOS%20QUEEN%20DEL%20VISO!5e0!3m2!1ses-419!2sar!4v1733693669252!5m2!1ses-419!2sar",
    facebook:
      "https://www.facebook.com/p/Helados-Queen-del-viso-100083150958027/",
    instagram: "https://www.instagram.com/heladosqueendelviso/",
  },
  {
    name: "Pilar",
    address: "Ituzaingó 580, Pilar",
    phone: 5491136751147,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.775640111811!2d-58.91432462430113!3d-34.457842749808876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d3c1ff1fbed%3A0x82c6dac9c007ae6f!2sHELADOS%20QUEEN%20PILAR!5e0!3m2!1ses-419!2sar!4v1733693837702!5m2!1ses-419!2sar",
    facebook: "https://www.facebook.com/Heladosqueenpilar/",
    instagram: "https://www.instagram.com/heladosqueen.pilar/",
  },
  {
    name: "Maquinista Savio",
    address: "Av. Constitución 155, Maquinista Savio",
    phone: 5491141890623,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.710701801235!2d-58.774494224303446!3d-34.408698447225014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f0a75b0ecc7%3A0x90c68ee3b42b43e7!2sHELADOS%20QUEEN%20SAVIO!5e0!3m2!1ses-419!2sar!4v1733693914232!5m2!1ses-419!2sar",
    facebook: "https://www.facebook.com/HeladosQueenSavio/",
    instagram: "https://www.instagram.com/queenhelados.savio/",
  },
  {
    name: "Luján",
    address: "Av. Humberto Primo 1066, Luján",
    phone: 5491123076072,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4277394188907!2d-59.113759124295804!3d-34.568041955614866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7de4f1b93f09%3A0xc35c3628938743b1!2sHELADOS%20QUEEN%20LUJAN!5e0!3m2!1ses-419!2sar!4v1733694170777!5m2!1ses-419!2sar",
    facebook: "https://www.facebook.com/Heladosqueenlujan/",
    instagram: "https://www.instagram.com/heladosqueenlujan/",
  },
] as const;

export const names = [
  "Belén de Escobar",
  "Garín",
  "Del Viso",
  "Pilar",
  "Maquinista Savio",
  "Luján",
] as const;

export default sucursales;
