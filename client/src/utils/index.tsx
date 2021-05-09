export const fetchTranslations = ({ language = "en" }) =>
  import(`../locales/${language}`).then((module) => {
    return module.default;
  });
export const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/g;

export const stringToLink = (e: any, desc: any) => {
  let link = e[0];
  let siteName = link.split("//")[1];
  const newDesc = desc.replace(
    link,
    `<a
	href=${link}
	target="_blank"
	rel="noopener noreferrer"
  > 
	${siteName}
  </a>`
  );
  return newDesc;
};
