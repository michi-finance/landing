

import MasonryResponsiveLayout from "../masonry";
import { Card, CardHeader, CardBody, Avatar, Button } from "@nextui-org/react";


const mockTestimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Jane Smith",
    subtitle: "Marketing Director",
    source: "/twitter-x.svg",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet."
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "Erik Wilson",
    subtitle: "Freelancer",
    source: "/twitter-x.svg",
    content: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Alice Brown",
    subtitle: "Product Manager",
    source: "/twitter-x.svg",
    content: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulumAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "Erik Wilson",
    subtitle: "Freelancer",
    source: "/twitter-x.svg",
    content: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Alice Brown",
    subtitle: "Product Manager",
    source: "/twitter-x.svg",
    content: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulumAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Jane Smith",
    subtitle: "Marketing Director",
    source: "/twitter-x.svg",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet."
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "Erik Wilson",
    subtitle: "Freelancer",
    source: "/twitter-x.svg",
    content: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Alice Brown",
    subtitle: "Product Manager",
    source: "/twitter-x.svg",
    content: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulumAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "Erik Wilson",
    subtitle: "Freelancer",
    source: "/twitter-x.svg",
    content: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Alice Brown",
    subtitle: "Product Manager",
    source: "/twitter-x.svg",
    content: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulumAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.."
  }, {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Doe",
    subtitle: "CEO at Example",
    source: "/twitter-x.svg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non accumsan nunc."
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Jane Smith",
    subtitle: "Marketing Director",
    source: "/twitter-x.svg",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet."
  },
];
const Testimonials = () => {
  const testimonialComponents = mockTestimonials.map((testimonial, index) => (
    <TestimonialCard key={index} {...testimonial} />
  ));


  return (
    <div className="relative w-full">
      <div className="max-page-width mx-auto text-center pt-28 sm:pt-32">
        <div className="flex flex-col space-y-2 sm:space-y-5">
          <p className="text-3xl font-medium sm:text-6xl text-font-gradient sm:leading-tight">
            Testimonial
          </p>
        </div>
        <MasonryResponsiveLayout gutter="12px" components={testimonialComponents} />
      </div>
      <div className="shadow-divider-top"></div>
      <div className="shadow-divider-bottom"></div>
    </div>
  );
};

const TestimonialCard = ({
  avatar,
  title,
  subtitle,
  source,
  content,
}: any) => {
  return (
    <Card className="max-w-full md:max-w-[340px]" isBlurred>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatar} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{title}</h4>
            <h5 className="text-small text-default-400">{subtitle}</h5>
          </div>
        </div>
        <img
          className="max-w-5 max-h-5"
          src={source}
        />
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export default Testimonials;