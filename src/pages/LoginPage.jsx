import { Link } from "react-router-dom";
import AuthIllustration from "../../src/assets/images/auth_illustration.png";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          <div>
            <img
              className="mb-12 max-w-full max-lg:hidden"
              src={AuthIllustration}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Facehook
              </h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* for the right section */}
          <div className="card">
            <div className="py-4 lg:py-6 text-sm text-gray-600/45 ">
              {/* Here it is */}
              <LoginForm />
              <div className="py-4 lg:py-6">
                <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                  Don’t have an account?
                  <Link
                    className="text-white transition-all hover:text-lwsGreen
    hover:underline mx-2"
                    to="/register"
                  >
                    Create New
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
