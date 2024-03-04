interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'geoping.gg',
    description: `一个开源的项目，用于检测一个网站在全球范围内的的连接状况。`,
    imgSrc: 'https://cdn.pixabay.com/photo/2018/03/15/16/11/background-3228704_1280.jpg',
    href: 'https://geoping.gg/',
  },
]

export default projectsData
