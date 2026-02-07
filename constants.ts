
import { ContactInfo, ServiceProduct } from './types';

export const CONTACT_DATA: ContactInfo = {
  // Badilisha namba hizi hapa chini kuwa namba halisi za saloon
  phone: "+255 754 123 456", 
  whatsapp: "+255 754 123 456",
  location: "Mlimani City, Dar es Salaam, Tanzania",
  email: "info@dasminebeauty.com",
  instagram: "@dasmine_beauty_saloon"
};

export const INITIAL_SERVICES: ServiceProduct[] = [
  {
    id: '1',
    title: 'Bridal Makeup',
    description: 'Tunatoa huduma ya makeup ya harusi iliyo bora zaidi ili uonekane mrembo siku yako ya furaha.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'TSh 150,000'
  },
  {
    id: '2',
    title: 'Hair Styling',
    description: 'Mitindo ya kisasa ya nywele kwa kila aina ya nywele na matukio.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'TSh 50,000'
  },
  {
    id: '3',
    title: 'Skin Care & Facials',
    description: 'Huduma za kusafisha uso na ngozi kwa kutumia bidhaa asilia.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'TSh 80,000'
  }
];
