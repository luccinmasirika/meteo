interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Data {
  main: Main;
  wind: Wind;
  name: string;
}

interface Weather {
  data: Data | null;
  isLoading: boolean;
}
