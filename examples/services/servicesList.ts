import services from './services.json';

export const servicesList = services?.data?.serviceResources?.map((item) => {
  return {
    id: item.id,
    title: item.title.nb,
  };
});
