export const projectRoutes = {
  "vinra kbr prime": "/kbr-prime",
  "vinra bmr velverde": "/BMR_velverde",
};

export function getProjectLink(item) {
  const title = item?.title?.toLowerCase().trim();
  return projectRoutes[title] || item?.link || "#";
}
