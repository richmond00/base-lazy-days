import { render, screen } from "@/test-utils";

import { Treatments } from "../Treatments";

test("renders response from query", async () => {
  render(<Treatments />);
  const treatmenTitles = await screen.findAllByRole("heading", { name: /massage|facial|scrub/i })
  expect(treatmenTitles).toHaveLength(3);
});
