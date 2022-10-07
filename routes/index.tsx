import {
  CloudIcon,
  CopyIcon,
  GearIcon,
  PlayIcon,
  TerminalIcon,
  VariableIcon,
} from "../components/Icons.tsx";
import type { ComponentChildren, VNode } from "preact";

import ServiceTabs from "../islands/ServiceTabs.tsx";

type FeatureProps = {
  text: string;
  icon: VNode;
  description?: string;
};
type SectionProps = {
  children: ComponentChildren;
  title: string;
  description: string;
};

const Feature = (props: FeatureProps) => {
  const { text, icon, description } = props;
  return (
    <div class="p-6 flex flex-col items-center justify-center space-y-2">
      <div>{icon}</div>
      <div class="font-semibold text-lg">{text}</div>
      {description && <div>{description}</div>}
    </div>
  );
};

const Section = (props: SectionProps) => {
  return (
    <div class="px-12 py-6 flex flex-col items-center py-14">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold">{props.title}</h1>
        <p class="text-xl mt-4 font-medium ">{props.description}</p>
      </div>
      <div class="py-6 flex flex-row flex-wrap space-x-4 w-3/4 mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div class="min-h-screen 2xl:min-h-[50vh] z-[100] text-white max-w-[1440px] mx-auto">
        <div class="text-center py-20 space-y-2">
          <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">
            Run your README.md
          </h2>
          <h3 class="text-2xl">
            Use familiar markdown to craft interactive runbooks in VS Code.
          </h3>
          <div className="flex flex-col items-center justify-center py-12 space-y-2">
            <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[200px] h-[40px] flex items-center justify-center font-semibold">
              <a href="https://github.com/stateful/vscode-runme/releases/tag/0.1.0-edge.7">
                Install the extension
              </a>
            </div>
            <div class="font-medium">
              or search <i>`runme`</i> in the VS Code extension panel
            </div>
          </div>
          <div class="w-3/4 mx-auto">
            <img src="/sidebyside.png" />
          </div>
        </div>

        {/* <div class="z-[100] text-white max-w-[1440px] mx-auto">
          <div class="px-12 py-2 pt-32 flex flex-col lg:flex-row space-y-12 lg:space-x-12 lg:space-y-0 pb-48">
            <div class="space-y-4">
              <h2 class="text-5xl xl:text-6xl 2xl:text-7xl font-bold">
                Run your README.md
              </h2>
              <h3 class="text-2xl">
                Use familiar markdown to craft interactive runbooks in VS Code.
              </h3>

              <div class="pt-12 flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                <div class="bg-[#e75b5b] py-[20px] rounded-md text-base w-[200px] h-[40px] flex items-center justify-center font-semibold">
                  <a href="https://github.com/stateful/vscode-runme/releases/tag/0.1.0-edge.7">
                    Install the extension
                  </a>
                </div>
              </div>
              <div class="font-medium">
                or search <i>`runme`</i> in the VS Code extension panel
              </div>
            </div>
            <img
              src="/runme-website-commands-v2.gif"
              class="rounded-md object-cover scale-110 z-10 h-auto sm:max-w-xl xl:max-w-[720px] z-10"
            />
          </div>
        </div> */}

        <Section
          title="Features"
          description="Everything a markdown file can do, and way more."
        >
          <div class="grid grid-cols-2 gap-2 w-full items-center flex justify-center">
            <Feature
              text="Click to run commands"
              icon={<PlayIcon />}
              description="effortlessly complete your README's steps"
            />
            <Feature
              text="Rich notebook interactivity"
              icon={<GearIcon />}
              description="overlay commands with web app like interactivity"
            />
            <Feature
              text="Baseline shell compatibility"
              icon={<TerminalIcon />}
              description="break out of shell without losing compatability"
            />
            <Feature
              text="Stateful environment variables"
              icon={<VariableIcon />}
              description="reliably define the execution environment"
            />
            <Feature
              text="Click to copy"
              icon={<CopyIcon />}
              description="copy & paste with environment variables filled in"
            />
            <Feature
              text="Cloud-native notebooks"
              icon={<CloudIcon />}
              description="deeply integrated with your favorite cloud services"
            />
          </div>
        </Section>

        <Section
          title="Command Line Interface"
          description="Parse and run markdown files in the terminal."
        >
          <img src="/terminal.png" />
        </Section>
        <Section
          title="Cloud Service Integrations"
          description="Visibly embedded inline in your docs.
          "
        >
          <div class="pt-6">
            <ServiceTabs />
          </div>
        </Section>
      </div>
    </>
  );
}
