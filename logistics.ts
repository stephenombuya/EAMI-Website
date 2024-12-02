export interface TransportRoute {
  id: string;
  name: string;
  type: 'road' | 'rail' | 'port';
  description: string;
  distance?: string;
  capacity: string;
  status: 'operational' | 'under-construction' | 'planned';
  connects: string[];
  image: string;
}

export interface TransportHub {
  id: string;
  name: string;
  type: 'port' | 'depot' | 'terminal';
  location: string;
  capacity: string;
  description: string;
  facilities: string[];
  image: string;
}