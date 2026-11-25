import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    technologies: [{ type: String }],
    category: { type: String, required: true },
    image: { type: String },
    githubUrl: { type: String },
    liveUrl: { type: String },
    features: [{ type: String }],
    challenges: { type: String },
    results: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
