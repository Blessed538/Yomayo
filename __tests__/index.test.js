import Home, { getStaticProps } from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import resources from "../seed/index.mock";

jest.mock("../components/projects/projects", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Projects</div>;
    },
  };
});

jest.mock("../components/services/services", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Our Services</div>;
    },
  };
});
jest.mock("../components/aboutUs/aboutUs", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>About Us</div>;
    },
  };
});
jest.mock("../components/team/team", () => {
  return {
    __esModule: true,
    default: () => {
      return <div>Team members</div>;
    },
  };
});

jest.mock("../components/home/home", () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <>
          <div>BayomAssociate</div>
          <div>Home</div>
          <div>Works</div>
        </>
      );
    },
  };
});

// jest.mock("../components/services/services", () => {
//   return {
//     __esModule: true,
//     default: (service) => {
//       const { name, price, image } = service;
//       return (
//         <div>
//           {name} {price} {image}
//         </div>
//       );
//     },
//   };
// });

describe("Index", () => {
  it("renders homepage", async () => {
    const resources = (await getStaticProps()).props.resources;
    const { container } = render(<Home resources={resources} />);
    expect(container.innerHTML).toMatch("BayomAssociate");
    expect(container.innerHTML).toMatch("Works");
    expect(container.innerHTML).toMatch("Home");
  });
  it("renders projects component", async () => {
    const resources = (await getStaticProps()).props.resources;
    const { container } = render(<Home resources={resources} />);
    expect(container.innerHTML).toMatch("Projects");
  });
  it("renders services component", async () => {
    const resources = (await getStaticProps()).props.resources;
    const { container } = render(<Home resources={resources} />);
    expect(container.innerHTML).toMatch("Our Services");
  });
  it("renders team component", async () => {
    const resources = (await getStaticProps()).props.resources;
    const { container } = render(<Home resources={resources} />);
    expect(container.innerHTML).toMatch("Team members");
  });
  it("renders projects component", async () => {
    const resources = (await getStaticProps()).props.resources;
    const { container } = render(<Home resources={resources} />);
    expect(container.innerHTML).toMatch("Projects");
  });
});
