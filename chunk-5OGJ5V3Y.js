import {
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  delay,
  map,
  of,
  ɵɵdefineInjectable
} from "./chunk-3YYMYGX4.js";

// src/app/features/calendar/mock/mock-calendar-data.ts
var MOCK_CALENDARS = [
  {
    id: "cal-personal",
    name: "\u500B\u4EBA",
    color: "#ff9800",
    visible: true,
    primary: true,
    owner: "\u81EA\u5206"
  },
  {
    id: "cal-work",
    name: "\u4ED5\u4E8B",
    color: "#1976d2",
    visible: true,
    owner: "\u81EA\u5206"
  },
  {
    id: "cal-schecon",
    name: "\u30B9\u30B1\u30B3\u30F3\u4E88\u5B9A",
    color: "#4caf50",
    visible: true,
    owner: "\u81EA\u5206",
    description: "\u30B9\u30B1\u30B3\u30F3\u3067\u4F5C\u6210\u3055\u308C\u305F\u4E88\u5B9A"
  },
  {
    id: "cal-tanaka",
    name: "\u7530\u4E2D\u592A\u90CE",
    color: "#9c27b0",
    visible: true,
    owner: "\u7530\u4E2D\u592A\u90CE"
  },
  {
    id: "cal-holidays",
    name: "\u65E5\u672C\u306E\u795D\u65E5",
    color: "#9e9e9e",
    visible: true,
    description: "\u65E5\u672C\u306E\u795D\u65E5\u30AB\u30EC\u30F3\u30C0\u30FC"
  }
];
function d(year, month, day, hour = 0, minute = 0) {
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}
var MOCK_EVENTS = [
  // === Regular meetings (8) ===
  {
    id: "evt-001",
    calendarId: "cal-work",
    title: "\u9031\u6B21\u5B9A\u4F8BMTG",
    description: "\u30C1\u30FC\u30E0\u5168\u4F53\u306E\u9031\u6B21\u5B9A\u4F8B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u3002\u9032\u6357\u5171\u6709\u3068\u30D6\u30ED\u30C3\u30AB\u30FC\u306E\u78BA\u8A8D\u3002",
    start: d(2026, 3, 3, 9, 0),
    end: d(2026, 3, 3, 10, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" },
      { email: "yamada@example.com", displayName: "\u5C71\u7530\u4E00\u90CE", responseStatus: "tentative" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    recurrence: { frequency: "weekly", interval: 1, byDay: ["TU"] },
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/abc-defg-hij",
    visibility: "busy",
    created: d(2026, 1, 5, 10, 0),
    updated: d(2026, 1, 5, 10, 0)
  },
  {
    id: "evt-001b",
    calendarId: "cal-work",
    title: "\u9031\u6B21\u5B9A\u4F8BMTG",
    description: "\u30C1\u30FC\u30E0\u5168\u4F53\u306E\u9031\u6B21\u5B9A\u4F8B\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u3002",
    start: d(2026, 3, 10, 9, 0),
    end: d(2026, 3, 10, 10, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/abc-defg-hij",
    visibility: "busy",
    created: d(2026, 1, 5, 10, 0),
    updated: d(2026, 1, 5, 10, 0)
  },
  {
    id: "evt-001c",
    calendarId: "cal-work",
    title: "\u9031\u6B21\u5B9A\u4F8BMTG",
    start: d(2026, 3, 17, 9, 0),
    end: d(2026, 3, 17, 10, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "declined" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/abc-defg-hij",
    visibility: "busy",
    created: d(2026, 1, 5, 10, 0),
    updated: d(2026, 1, 5, 10, 0)
  },
  {
    id: "evt-001d",
    calendarId: "cal-work",
    title: "\u9031\u6B21\u5B9A\u4F8BMTG",
    start: d(2026, 3, 24, 9, 0),
    end: d(2026, 3, 24, 10, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 5, 10, 0),
    updated: d(2026, 1, 5, 10, 0)
  },
  {
    id: "evt-002",
    calendarId: "cal-work",
    title: "1on1 \u7530\u4E2D",
    description: "\u7530\u4E2D\u3055\u3093\u3068\u306E\u9031\u6B211on1\u3002\u30AD\u30E3\u30EA\u30A2\u76EE\u6A19\u306E\u78BA\u8A8D\u3002",
    start: d(2026, 3, 6, 10, 0),
    end: d(2026, 3, 6, 10, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    recurrence: { frequency: "weekly", interval: 1, byDay: ["FR"] },
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/klm-nopq-rst",
    visibility: "busy",
    created: d(2026, 1, 10, 14, 0),
    updated: d(2026, 1, 10, 14, 0)
  },
  {
    id: "evt-002b",
    calendarId: "cal-work",
    title: "1on1 \u7530\u4E2D",
    start: d(2026, 3, 13, 10, 0),
    end: d(2026, 3, 13, 10, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/klm-nopq-rst",
    visibility: "busy",
    created: d(2026, 1, 10, 14, 0),
    updated: d(2026, 1, 10, 14, 0)
  },
  {
    id: "evt-002c",
    calendarId: "cal-work",
    title: "1on1 \u7530\u4E2D",
    start: d(2026, 3, 20, 10, 0),
    end: d(2026, 3, 20, 10, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 10, 14, 0),
    updated: d(2026, 1, 10, 14, 0)
  },
  {
    id: "evt-002d",
    calendarId: "cal-work",
    title: "1on1 \u7530\u4E2D",
    start: d(2026, 3, 27, 10, 0),
    end: d(2026, 3, 27, 10, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 10, 14, 0),
    updated: d(2026, 1, 10, 14, 0)
  },
  // チーム朝会 - daily
  {
    id: "evt-003a",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    description: "\u6BCE\u671D\u306E15\u5206\u30B9\u30BF\u30F3\u30C9\u30A2\u30C3\u30D7",
    start: d(2026, 3, 2, 9, 0),
    end: d(2026, 3, 2, 9, 15),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" },
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    recurrence: { frequency: "daily", interval: 1, byDay: ["MO", "TU", "WE", "TH", "FR"] },
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003b",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 3, 9, 0),
    end: d(2026, 3, 3, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003c",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 4, 9, 0),
    end: d(2026, 3, 4, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003d",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 5, 9, 0),
    end: d(2026, 3, 5, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003e",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 6, 9, 0),
    end: d(2026, 3, 6, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  // More daily standups in week 2
  {
    id: "evt-003f",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 9, 9, 0),
    end: d(2026, 3, 9, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003g",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 16, 9, 0),
    end: d(2026, 3, 16, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  {
    id: "evt-003h",
    calendarId: "cal-work",
    title: "\u30C1\u30FC\u30E0\u671D\u4F1A",
    start: d(2026, 3, 23, 9, 0),
    end: d(2026, 3, 23, 9, 15),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 2, 8, 0),
    updated: d(2026, 1, 2, 8, 0)
  },
  // Sprint review
  {
    id: "evt-004",
    calendarId: "cal-work",
    title: "\u30B9\u30D7\u30EA\u30F3\u30C8\u30EC\u30D3\u30E5\u30FC",
    description: "\u30B9\u30D7\u30EA\u30F3\u30C8\u6210\u679C\u7269\u306E\u30C7\u30E2\u3068\u30EC\u30D3\u30E5\u30FC",
    start: d(2026, 3, 13, 15, 0),
    end: d(2026, 3, 13, 16, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" },
      { email: "yamada@example.com", displayName: "\u5C71\u7530\u4E00\u90CE", responseStatus: "accepted" },
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A", responseStatus: "tentative" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/uvw-xyza-bcd",
    visibility: "busy",
    created: d(2026, 2, 1, 9, 0),
    updated: d(2026, 2, 1, 9, 0)
  },
  // Design review - overlaps with sprint review partially
  {
    id: "evt-005",
    calendarId: "cal-work",
    title: "\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC",
    description: "UI/UX\u30C7\u30B6\u30A4\u30F3\u30EC\u30D3\u30E5\u30FC\u3002\u65B0\u6A5F\u80FD\u306E\u30E2\u30C3\u30AF\u30A2\u30C3\u30D7\u78BA\u8A8D\u3002",
    start: d(2026, 3, 13, 16, 0),
    end: d(2026, 3, 13, 17, 0),
    allDay: false,
    guests: [
      { email: "designer@example.com", displayName: "\u9AD8\u6A4B\u7F8E\u54B2", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 2, 10, 11, 0),
    updated: d(2026, 2, 10, 11, 0)
  },
  // === External (6) ===
  {
    id: "evt-006",
    calendarId: "cal-work",
    title: "ABC\u682A\u5F0F\u4F1A\u793E \u8A2A\u554F",
    description: "\u65B0\u898F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u63D0\u6848\u30D7\u30EC\u30BC\u30F3",
    location: "\u6771\u4EAC\u90FD\u5343\u4EE3\u7530\u533A\u4E38\u306E\u51851-1-1 ABC\u30D3\u30EB 15F",
    start: d(2026, 3, 5, 14, 0),
    end: d(2026, 3, 5, 16, 0),
    allDay: false,
    guests: [
      { email: "abc-taniguchi@example.com", displayName: "\u8C37\u53E3\u90E8\u9577", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [
      { method: "popup", minutes: 30 },
      { method: "email", minutes: 1440 }
    ],
    attachments: [
      { fileUrl: "https://docs.google.com/presentation/d/xxx", title: "\u63D0\u6848\u8CC7\u6599.pptx", mimeType: "application/vnd.google-apps.presentation" }
    ],
    visibility: "busy",
    created: d(2026, 2, 20, 15, 0),
    updated: d(2026, 2, 25, 10, 0)
  },
  {
    id: "evt-007",
    calendarId: "cal-work",
    title: "\u30D1\u30FC\u30C8\u30CA\u30FC\u6253\u5408\u305B\uFF08XYZ\u793E\uFF09",
    description: "API\u9023\u643A\u306B\u3064\u3044\u3066\u6280\u8853\u7684\u306A\u6253\u3061\u5408\u308F\u305B",
    location: "\u30AA\u30F3\u30E9\u30A4\u30F3\uFF08Zoom\uFF09",
    start: d(2026, 3, 11, 13, 0),
    end: d(2026, 3, 11, 14, 0),
    allDay: false,
    guests: [
      { email: "xyz-yamamoto@example.com", displayName: "\u5C71\u672C\u6B21\u9577", responseStatus: "accepted" },
      { email: "xyz-ito@example.com", displayName: "\u4F0A\u85E4\u30A8\u30F3\u30B8\u30CB\u30A2", responseStatus: "needsAction" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    videoConferenceUrl: "https://zoom.us/j/1234567890",
    visibility: "busy",
    created: d(2026, 2, 28, 9, 0),
    updated: d(2026, 2, 28, 9, 0)
  },
  {
    id: "evt-008",
    calendarId: "cal-work",
    title: "\u53D6\u5F15\u5148\u30E9\u30F3\u30C1\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
    description: "DEF\u5546\u4E8B\u306E\u62C5\u5F53\u8005\u3068\u306E\u30AB\u30B8\u30E5\u30A2\u30EB\u30E9\u30F3\u30C1",
    location: "\u30EC\u30B9\u30C8\u30E9\u30F3\u9280\u5EA7 \u4E2D\u592E\u901A\u308A\u5E97",
    start: d(2026, 3, 18, 12, 0),
    end: d(2026, 3, 18, 13, 30),
    allDay: false,
    guests: [
      { email: "def-watanabe@example.com", displayName: "\u6E21\u8FBA\u8AB2\u9577", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 60 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 1, 11, 0),
    updated: d(2026, 3, 1, 11, 0)
  },
  {
    id: "evt-009",
    calendarId: "cal-work",
    title: "\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u5B9A\u4F8B\uFF08GHI\u793E\uFF09",
    start: d(2026, 3, 19, 10, 0),
    end: d(2026, 3, 19, 11, 0),
    allDay: false,
    guests: [
      { email: "ghi-nakamura@example.com", displayName: "\u4E2D\u6751PM", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/efg-hijk-lmn",
    visibility: "busy",
    created: d(2026, 2, 15, 14, 0),
    updated: d(2026, 2, 15, 14, 0)
  },
  {
    id: "evt-010",
    calendarId: "cal-work",
    title: "\u55B6\u696D\u30D7\u30EC\u30BC\u30F3\u6E96\u5099",
    description: "\u6765\u9031\u306E\u30D7\u30EC\u30BC\u30F3\u8CC7\u6599\u6700\u7D42\u30C1\u30A7\u30C3\u30AF",
    start: d(2026, 3, 25, 14, 0),
    end: d(2026, 3, 25, 15, 30),
    allDay: false,
    guests: [
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 10, 9, 0),
    updated: d(2026, 3, 10, 9, 0)
  },
  {
    id: "evt-011",
    calendarId: "cal-work",
    title: "\u63A1\u7528\u9762\u63A5\uFF08\u30A8\u30F3\u30B8\u30CB\u30A2\u5019\u88DC\uFF09",
    location: "\u4F1A\u8B70\u5BA4B",
    start: d(2026, 3, 26, 15, 0),
    end: d(2026, 3, 26, 16, 0),
    allDay: false,
    guests: [
      { email: "hr-kato@example.com", displayName: "\u52A0\u85E4\uFF08\u4EBA\u4E8B\uFF09", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 30 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 15, 10, 0),
    updated: d(2026, 3, 15, 10, 0)
  },
  // === Internal events (4) ===
  {
    id: "evt-012",
    calendarId: "cal-work",
    title: "\u5168\u793E\u4F1A\u8B70",
    description: "Q1\u632F\u308A\u8FD4\u308A\u3068Q2\u8A08\u753B\u767A\u8868",
    location: "\u5927\u4F1A\u8B70\u5BA4A",
    start: d(2026, 3, 16, 14, 0),
    end: d(2026, 3, 16, 16, 0),
    allDay: false,
    guests: [
      { email: "ceo@example.com", displayName: "\u4EE3\u8868 \u4E2D\u6751", responseStatus: "accepted", organizer: true },
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 30 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 2, 1, 10, 0),
    updated: d(2026, 2, 1, 10, 0)
  },
  {
    id: "evt-013",
    calendarId: "cal-work",
    title: "\u65B0\u4EBA\u6B53\u8FCE\u30E9\u30F3\u30C1",
    description: "4\u6708\u5165\u793E\u30E1\u30F3\u30D0\u30FC\u306E\u6B53\u8FCE\u30E9\u30F3\u30C1\u4F1A",
    location: "\u30AB\u30D5\u30A7\u30C6\u30EA\u30A2",
    start: d(2026, 3, 27, 12, 0),
    end: d(2026, 3, 27, 13, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "new-member@example.com", displayName: "\u65B0\u5165\u793E\u54E1 \u6728\u6751", responseStatus: "needsAction" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    visibility: "free",
    created: d(2026, 3, 15, 9, 0),
    updated: d(2026, 3, 15, 9, 0)
  },
  {
    id: "evt-014",
    calendarId: "cal-work",
    title: "\u6280\u8853\u52C9\u5F37\u4F1A",
    description: "\u30C6\u30FC\u30DE\uFF1AAngular Signals \u3068 RxJS \u306E\u4F7F\u3044\u5206\u3051",
    location: "\u30BB\u30DF\u30CA\u30FC\u30EB\u30FC\u30E0",
    start: d(2026, 3, 20, 17, 0),
    end: d(2026, 3, 20, 18, 30),
    allDay: false,
    guests: [
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A", responseStatus: "accepted" },
      { email: "yamada@example.com", displayName: "\u5C71\u7530\u4E00\u90CE", responseStatus: "tentative" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    visibility: "free",
    created: d(2026, 3, 5, 11, 0),
    updated: d(2026, 3, 5, 11, 0)
  },
  {
    id: "evt-015",
    calendarId: "cal-work",
    title: "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u632F\u308A\u8FD4\u308A",
    description: "Sprint Retrospective",
    start: d(2026, 3, 27, 15, 0),
    end: d(2026, 3, 27, 16, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/opq-rstu-vwx",
    visibility: "busy",
    created: d(2026, 3, 1, 10, 0),
    updated: d(2026, 3, 1, 10, 0)
  },
  // === Personal (5) ===
  {
    id: "evt-016",
    calendarId: "cal-personal",
    title: "\u6B6F\u533B\u8005",
    description: "\u5B9A\u671F\u691C\u8A3A",
    location: "\u5C71\u672C\u6B6F\u79D1\u30AF\u30EA\u30CB\u30C3\u30AF \u6E0B\u8C37",
    start: d(2026, 3, 7, 10, 0),
    end: d(2026, 3, 7, 11, 0),
    allDay: false,
    guests: [],
    reminders: [
      { method: "popup", minutes: 60 },
      { method: "email", minutes: 1440 }
    ],
    attachments: [],
    visibility: "busy",
    created: d(2026, 2, 10, 20, 0),
    updated: d(2026, 2, 10, 20, 0)
  },
  {
    id: "evt-017",
    calendarId: "cal-personal",
    title: "\u30B8\u30E0",
    description: "\u30D1\u30FC\u30BD\u30CA\u30EB\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0",
    location: "\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30B8\u30E0 \u9752\u5C71\u5E97",
    start: d(2026, 3, 4, 19, 0),
    end: d(2026, 3, 4, 20, 30),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 60 }],
    recurrence: { frequency: "weekly", interval: 1, byDay: ["WE"] },
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 15, 18, 0),
    updated: d(2026, 1, 15, 18, 0)
  },
  {
    id: "evt-017b",
    calendarId: "cal-personal",
    title: "\u30B8\u30E0",
    location: "\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30B8\u30E0 \u9752\u5C71\u5E97",
    start: d(2026, 3, 11, 19, 0),
    end: d(2026, 3, 11, 20, 30),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 60 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 15, 18, 0),
    updated: d(2026, 1, 15, 18, 0)
  },
  {
    id: "evt-017c",
    calendarId: "cal-personal",
    title: "\u30B8\u30E0",
    location: "\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30B8\u30E0 \u9752\u5C71\u5E97",
    start: d(2026, 3, 18, 19, 0),
    end: d(2026, 3, 18, 20, 30),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 60 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 15, 18, 0),
    updated: d(2026, 1, 15, 18, 0)
  },
  {
    id: "evt-017d",
    calendarId: "cal-personal",
    title: "\u30B8\u30E0",
    location: "\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\u30B8\u30E0 \u9752\u5C71\u5E97",
    start: d(2026, 3, 25, 19, 0),
    end: d(2026, 3, 25, 20, 30),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 60 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 1, 15, 18, 0),
    updated: d(2026, 1, 15, 18, 0)
  },
  {
    id: "evt-018",
    calendarId: "cal-personal",
    title: "\u7F8E\u5BB9\u9662",
    location: "\u30D8\u30A2\u30B5\u30ED\u30F3 BLOOM \u8868\u53C2\u9053",
    start: d(2026, 3, 14, 14, 0),
    end: d(2026, 3, 14, 16, 0),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 120 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 2, 20, 21, 0),
    updated: d(2026, 2, 20, 21, 0)
  },
  {
    id: "evt-019",
    calendarId: "cal-personal",
    title: "\u53CB\u4EBA\u306E\u8A95\u751F\u65E5\u30C7\u30A3\u30CA\u30FC",
    description: "\u4F50\u3005\u6728\u3055\u3093\u306E\u8A95\u751F\u65E5\u30D1\u30FC\u30C6\u30A3\u30FC",
    location: "\u30A4\u30BF\u30EA\u30A2\u30F3\u30EC\u30B9\u30C8\u30E9\u30F3 LUNA \u516D\u672C\u6728",
    start: d(2026, 3, 21, 19, 0),
    end: d(2026, 3, 21, 22, 0),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 180 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 1, 20, 0),
    updated: d(2026, 3, 1, 20, 0)
  },
  {
    id: "evt-020",
    calendarId: "cal-personal",
    title: "\u5F15\u8D8A\u3057\u898B\u7A4D\u3082\u308A",
    location: "\u81EA\u5B85",
    start: d(2026, 3, 28, 10, 0),
    end: d(2026, 3, 28, 11, 0),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 60 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 20, 19, 0),
    updated: d(2026, 3, 20, 19, 0)
  },
  // === All-day events (4) ===
  {
    id: "evt-021",
    calendarId: "cal-work",
    title: "\u5927\u962A\u51FA\u5F35",
    description: "\u5927\u962A\u30AA\u30D5\u30A3\u30B9\u8A2A\u554F\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0",
    location: "\u5927\u962A",
    start: d(2026, 3, 23, 0, 0),
    end: d(2026, 3, 25, 0, 0),
    allDay: true,
    guests: [
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" }
    ],
    reminders: [{ method: "email", minutes: 1440 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 1, 10, 0),
    updated: d(2026, 3, 1, 10, 0)
  },
  {
    id: "evt-022",
    calendarId: "cal-personal",
    title: "\u6709\u7D66\u4F11\u6687",
    start: d(2026, 3, 30, 0, 0),
    end: d(2026, 3, 31, 0, 0),
    allDay: true,
    guests: [],
    reminders: [],
    attachments: [],
    visibility: "outOfOffice",
    created: d(2026, 3, 10, 12, 0),
    updated: d(2026, 3, 10, 12, 0)
  },
  {
    id: "evt-023",
    calendarId: "cal-holidays",
    title: "\u6625\u5206\u306E\u65E5",
    start: d(2026, 3, 21, 0, 0),
    end: d(2026, 3, 22, 0, 0),
    allDay: true,
    guests: [],
    reminders: [],
    attachments: [],
    visibility: "free",
    created: d(2026, 1, 1, 0, 0),
    updated: d(2026, 1, 1, 0, 0)
  },
  {
    id: "evt-024",
    calendarId: "cal-work",
    title: "\u793E\u5185\u30CF\u30C3\u30AB\u30BD\u30F3",
    start: d(2026, 3, 28, 0, 0),
    end: d(2026, 3, 29, 0, 0),
    allDay: true,
    guests: [],
    reminders: [{ method: "popup", minutes: 1440 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 2, 15, 10, 0),
    updated: d(2026, 2, 15, 10, 0)
  },
  // === ScheCon linked (3) ===
  {
    id: "evt-025",
    calendarId: "cal-schecon",
    title: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8Kickoff\u65E5\u7A0B",
    description: "\u65B0\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30AD\u30C3\u30AF\u30AA\u30D5\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u3002\u30B9\u30B1\u30B3\u30F3\u3067\u65E5\u7A0B\u8ABF\u6574\u6E08\u307F\u3002",
    start: d(2026, 3, 12, 10, 0),
    end: d(2026, 3, 12, 11, 30),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "accepted" },
      { email: "yamada@example.com", displayName: "\u5C71\u7530\u4E00\u90CE", responseStatus: "accepted" },
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A", responseStatus: "accepted" },
      { email: "external@partner.com", displayName: "\u5916\u90E8\u30D1\u30FC\u30C8\u30CA\u30FC \u4F50\u3005\u6728", responseStatus: "tentative" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/yza-bcde-fgh",
    visibility: "busy",
    scheconLinked: true,
    scheconEventId: "sc-evt-001",
    created: d(2026, 3, 1, 14, 0),
    updated: d(2026, 3, 5, 16, 0)
  },
  {
    id: "evt-026",
    calendarId: "cal-schecon",
    title: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u30C1\u30FC\u30E0\u30E9\u30F3\u30C1\u4F1A",
    description: "\u30B9\u30B1\u30B3\u30F3\u3067\u5019\u88DC\u65E5\u8ABF\u6574\u4E2D",
    start: d(2026, 3, 19, 12, 0),
    end: d(2026, 3, 19, 13, 0),
    allDay: false,
    guests: [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE", responseStatus: "accepted" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50", responseStatus: "tentative" }
    ],
    reminders: [{ method: "popup", minutes: 30 }],
    attachments: [],
    visibility: "busy",
    scheconLinked: true,
    scheconEventId: "sc-evt-002",
    created: d(2026, 3, 10, 11, 0),
    updated: d(2026, 3, 10, 11, 0)
  },
  {
    id: "evt-027",
    calendarId: "cal-schecon",
    title: "\u3010\u30B9\u30B1\u30B3\u30F3\u3011\u9867\u5BA2\u30D2\u30A2\u30EA\u30F3\u30B0\u65E5\u7A0B",
    description: "\u9867\u5BA2\u30A4\u30F3\u30BF\u30D3\u30E5\u30FC\u306E\u65E5\u7A0B\u3002\u30B9\u30B1\u30B3\u30F3\u3067\u8ABF\u6574\u6E08\u307F\u3002",
    location: "\u30AA\u30F3\u30E9\u30A4\u30F3",
    start: d(2026, 3, 26, 11, 0),
    end: d(2026, 3, 26, 12, 0),
    allDay: false,
    guests: [
      { email: "customer@example.com", displayName: "\u9867\u5BA2 \u5C71\u53E3\u69D8", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 15 }],
    attachments: [],
    videoConferenceUrl: "https://meet.google.com/ijk-lmno-pqr",
    visibility: "busy",
    scheconLinked: true,
    scheconEventId: "sc-evt-003",
    created: d(2026, 3, 18, 9, 0),
    updated: d(2026, 3, 18, 9, 0)
  },
  // === Tanaka's calendar events ===
  {
    id: "evt-028",
    calendarId: "cal-tanaka",
    title: "\u7530\u4E2D\uFF1A\u4F01\u753B\u66F8\u4F5C\u6210",
    start: d(2026, 3, 10, 13, 0),
    end: d(2026, 3, 10, 15, 0),
    allDay: false,
    guests: [],
    reminders: [],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 5, 9, 0),
    updated: d(2026, 3, 5, 9, 0)
  },
  {
    id: "evt-029",
    calendarId: "cal-tanaka",
    title: "\u7530\u4E2D\uFF1A\u5916\u51FA\uFF08\u9280\u884C\uFF09",
    start: d(2026, 3, 17, 14, 0),
    end: d(2026, 3, 17, 15, 30),
    allDay: false,
    guests: [],
    reminders: [],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 12, 10, 0),
    updated: d(2026, 3, 12, 10, 0)
  },
  // === Overlap pair: two events at same time on Mar 11 ===
  {
    id: "evt-030",
    calendarId: "cal-work",
    title: "\u30D7\u30ED\u30C0\u30AF\u30C8\u4F01\u753B\u4F1A\u8B70",
    description: "\u65B0\u6A5F\u80FD\u306E\u4F01\u753B\u30D6\u30EC\u30B9\u30C8",
    start: d(2026, 3, 11, 10, 0),
    end: d(2026, 3, 11, 11, 30),
    allDay: false,
    guests: [
      { email: "pm@example.com", displayName: "\u30D7\u30ED\u30C0\u30AF\u30C8\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC \u5C0F\u6797", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 10 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 1, 10, 0),
    updated: d(2026, 3, 1, 10, 0)
  },
  {
    id: "evt-031",
    calendarId: "cal-personal",
    title: "\u5B85\u914D\u4FBF\u53D7\u53D6",
    start: d(2026, 3, 11, 10, 0),
    end: d(2026, 3, 11, 12, 0),
    allDay: false,
    guests: [],
    reminders: [{ method: "popup", minutes: 30 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 9, 20, 0),
    updated: d(2026, 3, 9, 20, 0)
  },
  // Another overlap pair on Mar 5
  {
    id: "evt-032",
    calendarId: "cal-work",
    title: "\u30B3\u30FC\u30C9\u30EC\u30D3\u30E5\u30FC",
    start: d(2026, 3, 5, 15, 0),
    end: d(2026, 3, 5, 16, 0),
    allDay: false,
    guests: [
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A", responseStatus: "accepted" }
    ],
    reminders: [{ method: "popup", minutes: 5 }],
    attachments: [],
    visibility: "busy",
    created: d(2026, 3, 3, 11, 0),
    updated: d(2026, 3, 3, 11, 0)
  }
];
function buildEventsDateMap(events) {
  const map2 = /* @__PURE__ */ new Map();
  for (const evt of events) {
    const startDate = new Date(evt.start);
    const endDate = new Date(evt.end);
    let current = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const last = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    while (current <= last) {
      const key = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}-${String(current.getDate()).padStart(2, "0")}`;
      map2.set(key, true);
      current.setDate(current.getDate() + 1);
    }
  }
  return map2;
}

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var millisecondsInMinute = 6e4;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function")
    return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date)
    return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount))
    return constructFrom(options?.in || date, NaN);
  if (!amount)
    return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount))
    return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/date-fns/areIntervalsOverlapping.js
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
  const [leftStartTime, leftEndTime] = [
    +toDate(intervalLeft.start, options?.in),
    +toDate(intervalLeft.end, options?.in)
  ].sort((a, b) => a - b);
  const [rightStartTime, rightEndTime] = [
    +toDate(intervalRight.start, options?.in),
    +toDate(intervalRight.end, options?.in)
  ].sort((a, b) => a - b);
  if (options?.inclusive)
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// src/app/features/calendar/services/calendar.service.ts
var CalendarService = class _CalendarService {
  constructor() {
    this.calendarsSubject = new BehaviorSubject([...MOCK_CALENDARS]);
    this.eventsSubject = new BehaviorSubject([...MOCK_EVENTS]);
    this.calendars$ = this.calendarsSubject.asObservable();
    this.rawEvents$ = this.eventsSubject.asObservable();
    this.events$ = this.rawEvents$.pipe(map((events) => _CalendarService.expandRecurringEventsStatic(events)));
    this.nextEventId = 100;
  }
  listCalendars() {
    return this.calendars$;
  }
  listEvents(range, calendarIds) {
    return this.events$.pipe(map((events) => {
      let expanded = _CalendarService.expandRecurringEventsStatic(events, range);
      if (calendarIds && calendarIds.length > 0) {
        expanded = expanded.filter((e) => calendarIds.includes(e.calendarId));
      }
      if (range) {
        expanded = expanded.filter((e) => {
          return areIntervalsOverlapping({ start: e.start, end: e.end }, { start: range.start, end: range.end });
        });
      }
      return expanded;
    }));
  }
  /** 繰り返しルールに基づいてイベントを展開する */
  static expandRecurringEventsStatic(events, range) {
    const result = [];
    const rangeStart = range?.start || addMonths(/* @__PURE__ */ new Date(), -1);
    const rangeEnd = range?.end || addMonths(/* @__PURE__ */ new Date(), 2);
    for (const event of events) {
      if (!event.recurrence) {
        result.push(event);
        continue;
      }
      result.push(event);
      const duration = differenceInMilliseconds(event.end, event.start);
      const rec = event.recurrence;
      const maxOccurrences = rec.count || 52;
      const isWeekdays = rec.byDay?.length === 5;
      let current = new Date(event.start);
      for (let i = 1; i < maxOccurrences; i++) {
        switch (rec.frequency) {
          case "daily":
            current = addDays(current, rec.interval);
            if (isWeekdays) {
              while (current.getDay() === 0 || current.getDay() === 6) {
                current = addDays(current, 1);
              }
            }
            break;
          case "weekly":
            current = addWeeks(current, rec.interval);
            break;
          case "monthly":
            current = addMonths(current, rec.interval);
            break;
          case "yearly":
            current = addYears(current, rec.interval);
            break;
        }
        if (rec.until && current > rec.until)
          break;
        if (current > rangeEnd)
          break;
        const instanceStart = new Date(current);
        const instanceEnd = new Date(instanceStart.getTime() + duration);
        if (instanceEnd < rangeStart)
          continue;
        result.push(__spreadProps(__spreadValues({}, event), {
          id: `${event.id}-rec-${i}`,
          start: instanceStart,
          end: instanceEnd
        }));
      }
    }
    return result;
  }
  getEvent(id) {
    return this.events$.pipe(map((events) => events.find((e) => e.id === id)));
  }
  createEvent(event) {
    const newEvent = {
      id: `evt-new-${this.nextEventId++}`,
      calendarId: event.calendarId || "cal-personal",
      title: event.title || "(\u30BF\u30A4\u30C8\u30EB\u306A\u3057)",
      description: event.description,
      location: event.location,
      start: event.start || /* @__PURE__ */ new Date(),
      end: event.end || /* @__PURE__ */ new Date(),
      allDay: event.allDay || false,
      color: event.color,
      guests: event.guests || [],
      reminders: event.reminders || [{ method: "popup", minutes: 15 }],
      recurrence: event.recurrence,
      attachments: event.attachments || [],
      videoConferenceUrl: event.videoConferenceUrl,
      visibility: event.visibility || "busy",
      scheconLinked: event.scheconLinked,
      scheconEventId: event.scheconEventId,
      created: /* @__PURE__ */ new Date(),
      updated: /* @__PURE__ */ new Date()
    };
    const current = this.eventsSubject.getValue();
    this.eventsSubject.next([...current, newEvent]);
    return of(newEvent).pipe(delay(200));
  }
  updateEvent(id, changes) {
    const current = this.eventsSubject.getValue();
    const index = current.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error(`Event ${id} not found`);
    }
    const updated = __spreadProps(__spreadValues(__spreadValues({}, current[index]), changes), { updated: /* @__PURE__ */ new Date() });
    const newList = [...current];
    newList[index] = updated;
    this.eventsSubject.next(newList);
    return of(updated).pipe(delay(200));
  }
  deleteEvent(id) {
    const current = this.eventsSubject.getValue();
    this.eventsSubject.next(current.filter((e) => e.id !== id));
    return of(true).pipe(delay(200));
  }
  inviteGuests(eventId, guestEmails) {
    const current = this.eventsSubject.getValue();
    const evt = current.find((e) => e.id === eventId);
    if (!evt) {
      throw new Error(`Event ${eventId} not found`);
    }
    const newGuests = guestEmails.filter((email) => !evt.guests.some((g) => g.email === email)).map((email) => ({
      email,
      displayName: email.split("@")[0],
      responseStatus: "needsAction"
    }));
    return this.updateEvent(eventId, {
      guests: [...evt.guests, ...newGuests]
    });
  }
  respondToEvent(eventId, response) {
    return this.updateEvent(eventId, {});
  }
  toggleCalendarVisibility(calendarId) {
    const current = this.calendarsSubject.getValue();
    const updated = current.map((c) => c.id === calendarId ? __spreadProps(__spreadValues({}, c), { visible: !c.visible }) : c);
    this.calendarsSubject.next(updated);
  }
  getAvailability(date, calendarIds) {
    return this.events$.pipe(map((events) => {
      const dayStart = startOfDay(date);
      const dayEnd = endOfDay(date);
      const dayEvents = events.filter((e) => {
        if (calendarIds && !calendarIds.includes(e.calendarId))
          return false;
        if (e.allDay)
          return false;
        return areIntervalsOverlapping({ start: e.start, end: e.end }, { start: dayStart, end: dayEnd });
      });
      const slots = [];
      for (let hour = 0; hour < 24; hour++) {
        const slotStart = new Date(date);
        slotStart.setHours(hour, 0, 0, 0);
        const slotEnd = new Date(date);
        slotEnd.setHours(hour + 1, 0, 0, 0);
        const busy = dayEvents.some((e) => areIntervalsOverlapping({ start: e.start, end: e.end }, { start: slotStart, end: slotEnd }));
        slots.push({ start: slotStart, end: slotEnd, busy });
      }
      return slots;
    }));
  }
  /** Search events by title, description, or location */
  searchEvents(term) {
    if (!term)
      return of([]);
    const lower = term.toLowerCase();
    return this.events$.pipe(map((events) => events.filter((e) => e.title.toLowerCase().includes(lower) || e.description && e.description.toLowerCase().includes(lower) || e.location && e.location.toLowerCase().includes(lower))));
  }
  /** Mock contact search for guest picker */
  searchContacts(query) {
    const contacts = [
      { email: "tanaka@example.com", displayName: "\u7530\u4E2D\u592A\u90CE" },
      { email: "suzuki@example.com", displayName: "\u9234\u6728\u82B1\u5B50" },
      { email: "yamada@example.com", displayName: "\u5C71\u7530\u4E00\u90CE" },
      { email: "sato@example.com", displayName: "\u4F50\u85E4\u5065\u592A" },
      { email: "designer@example.com", displayName: "\u9AD8\u6A4B\u7F8E\u54B2" },
      { email: "pm@example.com", displayName: "\u5C0F\u6797PM" },
      { email: "hr-kato@example.com", displayName: "\u52A0\u85E4\uFF08\u4EBA\u4E8B\uFF09" },
      { email: "ceo@example.com", displayName: "\u4EE3\u8868 \u4E2D\u6751" }
    ];
    if (!query)
      return of([]);
    const lower = query.toLowerCase();
    return of(contacts.filter((c) => c.displayName.toLowerCase().includes(lower) || c.email.toLowerCase().includes(lower))).pipe(delay(100));
  }
  static {
    this.\u0275fac = function CalendarService_Factory(t) {
      return new (t || _CalendarService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};

export {
  buildEventsDateMap,
  millisecondsInWeek,
  millisecondsInDay,
  millisecondsInMinute,
  constructFrom,
  toDate,
  addDays,
  addMonths,
  startOfDay,
  addWeeks,
  areIntervalsOverlapping,
  differenceInMilliseconds,
  endOfDay,
  CalendarService
};
//# sourceMappingURL=chunk-5OGJ5V3Y.js.map
