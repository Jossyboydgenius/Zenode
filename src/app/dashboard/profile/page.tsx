import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-white">Profile</span>
      </div>

      <div className="glass-effect p-8 rounded-xl">
        <div className="flex items-start gap-8">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatars/john.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-gray-400 mb-4">Full Stack Developer</p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-2 rounded-lg font-semibold">
                Edit Profile
              </button>
              <button className="border border-gray-700 text-white px-6 py-2 rounded-lg font-semibold">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 