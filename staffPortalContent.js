export const staffPortalDocuments = [
  {
    slug: "training-hosting",
    title: "Training Hostinyg",
    summary: "Schedule, start, track, and finish trainings cleanly.",
    category: "Operations",
    sections: [
      {
        heading: "Host Loop",
        body: [
          "Schedule the training before it starts, confirm RSVP attendees, mark the session started, record passes and failures, then finish the training so points and logs are handled.",
          "Use exact dates for planned trainings and relative times only for sessions happening soon.",
        ],
      },
      {
        heading: "Trial Host Supervision",
        body: [
          "Trial hosts cannot host trainings by themselves. When a trial host uses the schedule command, Clanker posts a supervisor request to the current supervisors.",
          "One available supervisor is picked at random from the response pool. The trial host should wait for that supervisor before starting the training.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/host training title:<title> when:<when> points:<points> type:<type> co-hosts:<@users> notes:<notes>",
          "/trainings attendees training-id:<id>",
          "/trainings start training-id:<id>",
          "/trainings finish training-id:<id> failed:<@users>",
          "/trainings cancel training-id:<id>",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/host training",
            summary: "Use this first when you are creating a new training post.",
            options: [
              { name: "title", level: "required", description: "The name of the training shown on the schedule post." },
              { name: "when", level: "required", description: "When the training starts. Use values like 10min, 2h, 1d, or an exact date." },
              { name: "points", level: "recommended", description: "Points each passing attendee receives. Set this unless leadership says the session gives no points." },
              { name: "type", level: "recommended", description: "The training category. Use General if nothing more specific fits." },
              { name: "co-hosts", level: "optional", description: "Other hosts helping with the session." },
              { name: "notes", level: "optional", description: "Extra context staff or attendees should know before the training." },
            ],
          },
          {
            command: "/trainings finish",
            summary: "Use this after the session ends. Clanker uses the RSVP list as the attendee list.",
            options: [
              { name: "training-id", level: "required", description: "The scheduled training number from the training post." },
              { name: "failed", level: "recommended", description: "RSVP attendees who failed. Everyone else on the RSVP list is treated as passed." },
              { name: "points", level: "optional", description: "Override the scheduled points for this finish action only." },
            ],
          },
          {
            command: "/trainings attendees",
            summary: "Use this to check who reacted before starting or finishing.",
            options: [
              { name: "training-id", level: "required", description: "The training number from the schedule post." },
            ],
          },
          {
            command: "/trainings start",
            summary: "Use this when the training actually begins.",
            options: [
              { name: "training-id", level: "required", description: "The scheduled training number to mark as started." },
            ],
          },
          {
            command: "/trainings cancel",
            summary: "Use this only when a scheduled training will not happen.",
            options: [
              { name: "training-id", level: "required", description: "The scheduled training number to cancel." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "training-results",
    title: "Training Results",
    summary: "Handle passes, fails, manual logs, corrections, and stats.",
    category: "Operations",
    sections: [
      {
        heading: "Results Rules",
        body: [
          "Do not award points to people who did not attend. Put failed attendees in the failed field when the failure should be recorded.",
          "Use manual logging only for sessions that already happened or were not scheduled through Clanker.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/trainings add-result training-id:<id> users:<@users> result:Pass points:<points>",
          "/trainings add-result training-id:<id> users:<@users> result:Fail",
          "/trainings log title:<title> attendees:<@users> points:<points> failed:<@users> notes:<notes>",
          "/trainings stats member:<@member>",
          "/trainings list status:Completed",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/trainings add-result",
            summary: "Use this for corrections or when you need to mark extra passes/fails after scheduling.",
            options: [
              { name: "training-id", level: "required", description: "The training number being corrected." },
              { name: "users", level: "required", description: "Mentions or Discord IDs to update." },
              { name: "result", level: "required", description: "Pass awards points. Fail records the user without awarding points." },
              { name: "points", level: "optional", description: "Override points for this update only." },
            ],
          },
          {
            command: "/trainings log",
            summary: "Use this for a training that already happened or was not scheduled through Clanker.",
            options: [
              { name: "title", level: "required", description: "The training name for the record." },
              { name: "attendees", level: "required", description: "Everyone who attended. Put failed users in failed too." },
              { name: "points", level: "required", description: "Points per passing attendee." },
              { name: "failed", level: "recommended", description: "Attendees who failed and should receive no points." },
              { name: "type", level: "optional", description: "Training category. Defaults to general." },
              { name: "co-hosts", level: "optional", description: "Other hosts who helped." },
              { name: "training-id", level: "optional", description: "Existing scheduled training number, if this log belongs to one." },
              { name: "notes", level: "optional", description: "Extra context for staff records." },
            ],
          },
          {
            command: "/trainings stats",
            summary: "Use this to check a member's training activity.",
            options: [
              { name: "member", level: "optional", description: "Member to check. Leave blank to check yourself." },
            ],
          },
          {
            command: "/trainings list",
            summary: "Use this to find recent trainings by status.",
            options: [
              { name: "status", level: "optional", description: "Scheduled, Completed, or Canceled. Defaults to Scheduled." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "missions",
    title: "Mission Hosting",
    summary: "Create missions, add successful users, and award mission points.",
    category: "Operations",
    sections: [
      {
        heading: "Mission Flow",
        body: [
          "Create the mission, add only members who successfully completed the objective, then complete the mission to award mission points.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/missions create title:<title> objective:<objective> when:<when> points:<points>",
          "/missions add-user mission-id:<id> users:<@users>",
          "/missions remove-user mission-id:<id> member:<@member>",
          "/missions complete mission-id:<id>",
          "/missions cancel mission-id:<id>",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/missions create",
            summary: "Use this to post a mission before it starts.",
            options: [
              { name: "title", level: "required", description: "Short mission name." },
              { name: "objective", level: "required", description: "What members must complete." },
              { name: "when", level: "recommended", description: "When the mission starts or happens." },
              { name: "points", level: "recommended", description: "Mission points each successful member receives." },
            ],
          },
          {
            command: "/missions add-user",
            summary: "Use this to add successful members before completing the mission.",
            options: [
              { name: "mission-id", level: "required", description: "The mission number." },
              { name: "users", level: "required", description: "Members who successfully completed the objective." },
            ],
          },
          {
            command: "/missions remove-user",
            summary: "Use this if someone was added by mistake.",
            options: [
              { name: "mission-id", level: "required", description: "The mission number." },
              { name: "member", level: "required", description: "The member to remove." },
            ],
          },
          {
            command: "/missions complete",
            summary: "Use this when the mission is done and points should be awarded.",
            options: [
              { name: "mission-id", level: "required", description: "The mission number to complete." },
            ],
          },
          {
            command: "/missions cancel",
            summary: "Use this when a mission will not happen.",
            options: [
              { name: "mission-id", level: "required", description: "The mission number to cancel." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "verification",
    title: "Verification Support",
    summary: "Help members verify Roblox, refresh roles, and resolve account issues.",
    category: "Member Support",
    sections: [
      {
        heading: "Member Support",
        body: [
          "Members should start with /verify. Staff should use manual verification only when they are confident the Roblox account belongs to the Discord member.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/verify",
          "/update member:<@member> sync-roles:true",
          "/staff roblox-verify member:<@member> username:<roblox-username> sync-roles:true",
          "/staff roblox-update member:<@member> sync-roles:true",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/update",
            summary: "Use this to refresh roles for yourself or another member.",
            options: [
              { name: "member", level: "optional", description: "Member to refresh. Leave blank to update yourself." },
              { name: "sync-roles", level: "recommended", description: "Use true when roles should be synced after verification." },
            ],
          },
          {
            command: "/staff roblox-verify",
            summary: "Use this only when staff is manually linking a member to a Roblox account.",
            options: [
              { name: "member", level: "required", description: "Discord member being verified." },
              { name: "username", level: "required", description: "Roblox username that belongs to the member." },
              { name: "sync-roles", level: "recommended", description: "Use true so Clanker refreshes Discord roles after linking." },
            ],
          },
          {
            command: "/staff roblox-update",
            summary: "Use this after a member is already linked and needs their roles refreshed.",
            options: [
              { name: "member", level: "required", description: "Discord member to refresh." },
              { name: "sync-roles", level: "recommended", description: "Use true when Discord roles should be updated." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "shorts-rsvp",
    title: "Shorts and RSVP",
    summary: "Quick meanings for common staff shorthand and RSVP behavior.",
    category: "Reference",
    sections: [
      {
        heading: "Common Shorts",
        body: [
          "RSVP means a member reacts to the scheduled training post to say they plan to attend. Clanker uses the RSVP list when a host finishes the training.",
          "TH means trial host. Trial hosts can schedule trainings, but they cannot host alone until a supervisor is selected.",
          "Sup means supervisor. Supervisors claim trial-host requests, then Clanker picks one at random from the claim pool.",
        ],
      },
      {
        heading: "Short Paths",
        commands: [
          "/host training title:<title> when:<when>",
          "/trainings finish training-id:<id> failed:<@users>",
          "/trainings attendees training-id:<id>",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/host training",
            summary: "Shortest path for creating a training post.",
            options: [
              { name: "title", level: "required", description: "Training name." },
              { name: "when", level: "required", description: "Start time." },
            ],
          },
          {
            command: "/trainings finish",
            summary: "Shortest path for closing a scheduled training.",
            options: [
              { name: "training-id", level: "required", description: "Training number." },
              { name: "failed", level: "recommended", description: "Members from the RSVP list who failed." },
            ],
          },
          {
            command: "/trainings attendees",
            summary: "Quick check of the RSVP list.",
            options: [
              { name: "training-id", level: "required", description: "Training number." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "points-audits",
    title: "Points and Audits",
    summary: "Review point totals, leaderboards, history, and staff audit summaries.",
    category: "Staff Review",
    sections: [
      {
        heading: "Point Buckets",
        body: [
          "Training workflows should award training points. Mission workflows should award mission points. Manual point changes should include a useful reason.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/points view member:<@member> type:Total points",
          "/points leaderboard limit:10 type:Total points",
          "/points history member:<@member> type:<training|mission>",
          "/staff audit member:<@member>",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/points view",
            summary: "Use this to check one member's points.",
            options: [
              { name: "member", level: "required", description: "Member whose points you want to see." },
              { name: "type", level: "recommended", description: "Point bucket to view. Total points is best for a quick check." },
            ],
          },
          {
            command: "/points leaderboard",
            summary: "Use this to compare top point totals.",
            options: [
              { name: "limit", level: "optional", description: "How many members to show. Use 10 for a normal leaderboard." },
              { name: "type", level: "recommended", description: "Point bucket to rank by." },
            ],
          },
          {
            command: "/points history",
            summary: "Use this when you need the reason/history behind points.",
            options: [
              { name: "member", level: "required", description: "Member to review." },
              { name: "type", level: "recommended", description: "Training, mission, or another point bucket." },
            ],
          },
          {
            command: "/staff audit",
            summary: "Use this for a compact staff review of one member.",
            options: [
              { name: "member", level: "required", description: "Member to audit." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "music-voice",
    title: "Music and Voice",
    summary: "Use voice playback controls during casual events.",
    category: "Utilities",
    sections: [
      {
        heading: "Host Etiquette",
        body: [
          "Keep volume reasonable, stop music before formal instruction, and avoid long playlists unless the event needs them.",
        ],
      },
      {
        heading: "Core Commands",
        commands: [
          "/music play query:<song-or-url>",
          "/music queue",
          "/music skip",
          "/music pause",
          "/music resume",
          "/music stop",
          "/music leave",
        ],
      },
      {
        heading: "Command Options",
        optionGroups: [
          {
            command: "/music play",
            summary: "Use this while you are in a voice channel to add audio.",
            options: [
              { name: "query", level: "required", description: "Song name, search phrase, or supported URL." },
            ],
          },
        ],
      },
    ],
  },
];

export function findStaffPortalDocument(slug) {
  return staffPortalDocuments.find((document) => document.slug === slug) || null;
}
