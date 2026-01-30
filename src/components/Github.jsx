import { FaGithub } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar"
export default function Github(){
    return(
        <section className="max-w-5xl mx-auto px-6 py-24">
  {/* Heading (LEFT aligned) */}
  <div className="flex items-center gap-4">
    <span className="rounded-lg border border-blue-600/50 bg-blue-500/20 p-2">
      <FaGithub className="text-2xl text-blue-500" />
    </span>
    <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-600/50 bg-clip-text text-transparent">
      GitHub Activity
    </h2>
  </div>

  {/* Divider */}
  <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

  {/* Centered chart */}
  <div className="flex justify-center">
    <div className="
      max-w-3xl w-full
      overflow-x-auto rounded-xl
      border border-blue-500/20
      bg-black p-6
    ">
      <GitHubCalendar
        username="itsgauravkumar07"
        blockSize={14}
        blockMargin={5}
        fontSize={14}
        theme={{
          dark: [
            "#161b22",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
          ],
        }}
      />
    </div>
  </div>
</section>


         
    )
}