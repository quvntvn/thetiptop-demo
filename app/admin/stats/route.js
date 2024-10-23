import {getRolesFromCookie, getUserFromCookie} from "@/utils/getUserFromCookie";

export default async (req, res) => {
  const session = getUserFromCookie();
  const roles = getRolesFromCookie();

  if (!session || !roles.includes('admin')) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  const stats = {
    ticketsProvided: 5000,
    ticketsUsed: 3000,
    prizesWon: 200,
    genderDistribution: { male: 60, female: 40 },
    ageDistribution: { '18-25': 1000, '26-35': 1500, '36-45': 800, '46+': 700 }
  };

  res.status(200).json(stats);
};
