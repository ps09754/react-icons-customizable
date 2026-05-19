import fs from 'fs';
import path from 'path';

// Complete database of 250+ Premium high-quality SVGs (Feather compliant)
const icons = [
  // 1. Arrows & Chevrons (28 icons)
  { name: 'ArrowUp', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow up direction raise elevation north', paths: '<line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />' },
  { name: 'ArrowDown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow down direction lower descend south', paths: '<line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />' },
  { name: 'ArrowLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow left direction back prev west', paths: '<line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />' },
  { name: 'ArrowRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow right direction forward next east', paths: '<line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />' },
  { name: 'ChevronUp', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevron up angle fold toggle top upward', paths: '<polyline points="18 15 12 9 6 15" />' },
  { name: 'ChevronDown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevron down angle fold toggle expand lower', paths: '<polyline points="6 9 12 15 18 9" />' },
  { name: 'ChevronLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevron left angle slide previous back', paths: '<polyline points="15 18 9 12 15 6" />' },
  { name: 'ChevronRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevron right angle slide forward next', paths: '<polyline points="9 18 15 12 9 6" />' },
  { name: 'ChevronsUp', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevrons up double shift fast top', paths: '<polyline points="17 11 12 6 7 11" /><polyline points="17 18 12 13 7 18" />' },
  { name: 'ChevronsDown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevrons down double shift fast bottom', paths: '<polyline points="7 13 12 18 17 13" /><polyline points="7 6 12 11 17 6" />' },
  { name: 'ChevronsLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevrons left double back fast skip rewind', paths: '<polyline points="11 17 6 12 11 7" /><polyline points="17 17 12 12 17 7" />' },
  { name: 'ChevronsRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chevrons right double forward fast skip forward', paths: '<polyline points="13 17 18 12 13 7" /><polyline points="7 17 12 12 7 7" />' },
  { name: 'ArrowUpLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow diagonal up left north west', paths: '<line x1="17" y1="17" x2="7" y2="7" /><polyline points="7 17 7 7 17 7" />' },
  { name: 'ArrowUpRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow diagonal up right north east', paths: '<line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />' },
  { name: 'ArrowDownLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow diagonal down left south west', paths: '<line x1="17" y1="7" x2="7" y2="17" /><polyline points="17 17 7 17 7 7" />' },
  { name: 'ArrowDownRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow diagonal down right south east', paths: '<line x1="7" y1="7" x2="17" y2="17" /><polyline points="7 17 17 17 17 7" />' },
  { name: 'CornerDownLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow corner down left curved transition', paths: '<polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" />' },
  { name: 'CornerDownRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow corner down right curved transition', paths: '<polyline points="15 10 20 15 15 20" /><path d="M4 4v7a4 4 0 0 0 4 4h12" />' },
  { name: 'CornerUpLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow corner up left curved transition', paths: '<polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 1-4-4H4" />' },
  { name: 'CornerUpRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow corner up right curved transition', paths: '<polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" />' },
  { name: 'CaretUp', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'caret up arrow micro triangle top', paths: '<polygon points="12 8 6 14 18 14" />' },
  { name: 'CaretDown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'caret down arrow micro triangle bottom', paths: '<polygon points="6 10 12 16 18 10" />' },
  { name: 'CaretLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'caret left arrow micro triangle previous', paths: '<polygon points="14 6 8 12 14 18" />' },
  { name: 'CaretRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'caret right arrow micro triangle next', paths: '<polygon points="10 6 16 12 10 18" />' },
  { name: 'ArrowUpCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow up circle ring north top', paths: '<circle cx="12" cy="12" r="10" /><polyline points="16 12 12 8 8 12" /><line x1="12" y1="16" x2="12" y2="8" />' },
  { name: 'ArrowDownCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow down circle ring south bottom', paths: '<circle cx="12" cy="12" r="10" /><polyline points="8 12 12 16 16 12" /><line x1="12" y1="8" x2="12" y2="16" />' },
  { name: 'ArrowLeftCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow left circle ring west back', paths: '<circle cx="12" cy="12" r="10" /><polyline points="12 8 8 12 12 16" /><line x1="16" y1="12" x2="8" y2="12" />' },
  { name: 'ArrowRightCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'arrow right circle ring east next', paths: '<circle cx="12" cy="12" r="10" /><polyline points="12 16 16 12 12 8" /><line x1="8" y1="12" x2="16" y2="12" />' },

  // 2. Geometric Shapes (16 icons)
  { name: 'Circle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'circle round ring geometry shape', paths: '<circle cx="12" cy="12" r="10" />' },
  { name: 'Square', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'square box geometry shape outline block', paths: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />' },
  { name: 'Triangle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'triangle delta geometry shape warning pyramid', paths: '<polygon points="12 2 22 21 2 21" />' },
  { name: 'Hexagon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'hexagon geometry shape cell honeycomb bolt', paths: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />' },
  { name: 'Octagon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'octagon stop geometry shape sign red', paths: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />' },
  { name: 'Star', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'star favorite rating highlight premium review gold', paths: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />' },
  { name: 'Heart', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'heart love like favorite health active blood pulse red', paths: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />' },
  { name: 'Bookmark', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'bookmark tag save read later highlight ribbon', paths: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />' },
  { name: 'Eye', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'eye view look watch see watch visibility preview', paths: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />' },
  { name: 'EyeOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'eye off hide blind secure private invisible mask secret', paths: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" />' },
  { name: 'Shield', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'shield guard protect secure security safe armor', paths: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />' },
  { name: 'ShieldOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'shield off unsecure vulnerable guard unprotected', paths: '<path d="M19.69 14a11.9 11.9 0 0 0 .31-4V5l-8-3-3.11 1.17M4.64 4.64L3 5v5c0 6 8 10 8 10a12 12 0 0 0 5.07-5M1 1l22 22" />' },
  { name: 'Sun', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sun hot day warm weather brightness light glow', paths: '<circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />' },
  { name: 'Moon', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'moon night dark cold weather sleep stars nature', paths: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />' },
  { name: 'Cloud', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cloud weather storage backup internet database scale', paths: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />' },
  { name: 'Zap', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'zap thunder lightning storm speed fast energy electricity power', paths: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />' },

  // 3. User & Authentication (15 icons)
  { name: 'User', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'user person account profile member key', paths: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />' },
  { name: 'UserPlus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'user plus add member invite friend positive', paths: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />' },
  { name: 'UserMinus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'user minus delete remove subtract member friend negative', paths: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="23" y1="11" x2="17" y2="11" />' },
  { name: 'UserCheck', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'user check verify success ok complete member', paths: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />' },
  { name: 'UserX', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'user x close delete ban cancel block reject', paths: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="18" y1="8" x2="23" y2="13" /><line x1="23" y1="8" x2="18" y2="13" />' },
  { name: 'Users', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'users group team community crowd crew assembly', paths: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />' },
  { name: 'Lock', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'lock secure private safe safety block guard password', paths: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />' },
  { name: 'Unlock', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'unlock open clear unsafe expose release', paths: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" />' },
  { name: 'Key', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'key unlock access door credential secret security', paths: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3" />' },
  { name: 'Keyhole', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'keyhole door lock password security safe credential', paths: '<circle cx="12" cy="12" r="10" /><path d="M12 8a2 2 0 0 0-1 3.46v2.54a1 1 0 0 0 2 0v-2.54A2 2 0 0 0 12 8z" />' },
  { name: 'Activity', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'activity pulse heart rate medical tracing graph chart health fitness line', paths: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />' },
  { name: 'Heartbeat', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'heartbeat pulse health medical doctor love rate', paths: '<path d="M22 12h-4l-3 9L9 3l-3 9H2" />' },
  { name: 'Smile', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'smile happy emotion face feedback rate rating positive', paths: '<circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />' },
  { name: 'Frown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'frown sad emotion face feedback rate rating negative', paths: '<circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />' },
  { name: 'Meh', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'meh normal neutral emotion face feedback rate rating medium', paths: '<circle cx="12" cy="12" r="10" /><line x1="8" y1="15" x2="16" y2="15" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />' },

  // 4. Files & Folders (20 icons)
  { name: 'Folder', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'folder directory storage container file system', paths: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />' },
  { name: 'FolderPlus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'folder plus add new store create dynamic', paths: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" />' },
  { name: 'FolderMinus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'folder minus delete remove subtract reduce', paths: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /><line x1="9" y1="14" x2="15" y2="14" />' },
  { name: 'FolderX', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'folder x close ban block delete remove cancel', paths: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /><line x1="9" y1="14" x2="15" y2="14" /><line x1="15" y1="14" x2="9" y2="14" />' },
  { name: 'File', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'file document sheet page write note text', paths: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" />' },
  { name: 'FileText', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'file text document writing details list paragraph', paths: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />' },
  { name: 'FilePlus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'file plus add create new document negative template', paths: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" />' },
  { name: 'FileMinus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'file minus delete remove sheet document template', paths: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="14" x2="15" y2="14" />' },
  { name: 'FileX', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'file x close cancel document sheet trash remove', paths: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" />' },
  { name: 'Archive', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'archive store save repository box database chest package history', paths: '<polyline points="21 8 21 21 3 21 3 8" /><rect x="1" y="3" width="22" height="5" /><line x1="10" y1="12" x2="14" y2="12" />' },
  { name: 'Book', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'book read library guide literature manual book store notebook', paths: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />' },
  { name: 'BookOpen', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'book open read library literature learning study booklet', paths: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />' },
  { name: 'Clipboard', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'clipboard board copy task memo checklist board', paths: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" />' },
  { name: 'Copy', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'copy duplicate clone paper double file replicate', paths: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />' },
  { name: 'HardDrive', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'hard drive disk storage server database tech backup', paths: '<line x1="22" y1="12" x2="2" y2="12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" y1="16" x2="6.01" y2="16" /><line x1="10" y1="16" x2="10.01" y2="16" />' },
  { name: 'Database', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'database storage stack cylinder server backup memory tech', paths: '<ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />' },
  { name: 'Server', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'server terminal computer storage hardware database hosting rack', paths: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />' },
  { name: 'Layers', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'layers stack multiple cards sheets layout level cascade', paths: '<polygon points="12 2 2 7 12 12 22 7 12 2" /><polygon points="2 17 12 22 22 17" /><polygon points="2 12 12 17 22 12" />' },
  { name: 'Box', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'box package storage delivery shipping cube geometric container', paths: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />' },
  { name: 'Package', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'package box delivery shipping storage gift parcel transport', paths: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><polygon points="12 22.08 12 12 3 6.96 3 16.08 12 22.08" /><polygon points="12 22.08 12 12 21 6.96 21 16.08 12 22.08" /><polygon points="12 12 3 6.96 12 2 21 6.96 12 12" /><line x1="12" y1="22.08" x2="12" y2="12" />' },

  // 5. General UI Actions & Essentials (30 icons)
  { name: 'Search', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'search find magnifying glass lens scan look', paths: '<circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />' },
  { name: 'Settings', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'settings gear cog config custom tools options adjust', paths: '<circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />' },
  { name: 'Bell', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'bell notification alert alarm notice sound ring', paths: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />' },
  { name: 'BellOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'bell off quiet mute notification silent disable', paths: '<path d="M13.73 21a2 2 0 0 1-3.46 0" /><path d="M18.63 13A17.89 17.89 0 0 1 18 8" /><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" /><path d="M18 8a6 6 0 0 0-9.33-5M1 1l22 22" />' },
  { name: 'Trash', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'trash delete remove clean recycle bin waste garbage', paths: '<polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />' },
  { name: 'Trash2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'trash 2 bucket delete bin empty garbage clear', paths: '<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />' },
  { name: 'Edit', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'edit pencil pen modify write note draw sketch', paths: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />' },
  { name: 'Edit2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'edit 2 pen writing drawing signature signature', paths: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />' },
  { name: 'Mail', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'mail email envelope post letter message inbox contact', paths: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />' },
  { name: 'Check', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'check tick ok correct verified yes pass confirm done', paths: '<polyline points="20 6 9 17 4 12" />' },
  { name: 'CheckCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'check circle correct success verified done task finished', paths: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />' },
  { name: 'CheckSquare', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'check square box verify dynamic list select checkmark', paths: '<polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />' },
  { name: 'Plus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'plus add new positive mathematical sum expand increment', paths: '<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />' },
  { name: 'PlusCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'plus circle ring add increase sum template positive create', paths: '<circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />' },
  { name: 'Minus', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'minus sub abstract reduce dash line math negative decrease', paths: '<line x1="5" y1="12" x2="19" y2="12" />' },
  { name: 'MinusCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'minus circle ring block restrict deny negative decrease', paths: '<circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" />' },
  { name: 'Close', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'close x exit cancel reject delete abort multiply cross', paths: '<line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />' },
  { name: 'XCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'x circle delete cancel restrict block close cross', paths: '<circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />' },
  { name: 'Menu', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'menu burger list bar options drawer navigation', paths: '<line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />' },
  { name: 'Grid', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'grid box panel dashboard blocks tiles columns layout', paths: '<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />' },
  { name: 'List', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'list menu bullet catalog array layout options items', paths: '<line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />' },
  { name: 'Info', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'info detail status help advice guideline description', paths: '<circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />' },
  { name: 'HelpCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'help query ask search faq question circle guide support', paths: '<circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />' },
  { name: 'AlertCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'alert circle warning error danger attention info active', paths: '<circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />' },
  { name: 'AlertTriangle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'alert triangle warning danger attention caution error block', paths: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />' },
  { name: 'Sliders', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sliders settings configurations controls adjust panel metrics', paths: '<line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="12" x2="23" y2="12" />' },
  { name: 'Filter', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'filter search sort funel query data segment block', paths: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />' },
  { name: 'ToggleLeft', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'toggle left turn off switch disable standby inactive', paths: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle cx="8" cy="12" r="3" />' },
  { name: 'ToggleRight', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'toggle right turn on switch enable active run', paths: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle cx="16" cy="12" r="3" />' },
  { name: 'Link', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'link chain hyperlink bind connect attach address URL', paths: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />' },

  // 6. Devices & Tech (15 icons)
  { name: 'Monitor', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'monitor screen desktop tv display tech machine system', paths: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />' },
  { name: 'Smartphone', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'smartphone mobile phone device cellular contact tech caller', paths: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />' },
  { name: 'Tablet', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'tablet ipad screen hand device technology touch pad', paths: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />' },
  { name: 'Laptop', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'laptop notebook computer device tech screen workstation portable', paths: '<path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12m-2 0h20v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3z" />' },
  { name: 'Tv', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'tv television display monitor video broadcast antenna show', paths: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" />' },
  { name: 'Cpu', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cpu chip processor brain computer hardware circuit tech board', paths: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />' },
  { name: 'Wifi', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'wifi signal internet network wireless connection online radar', paths: '<path d="M5 12.55a11 11 0 0 1 14 0" /><path d="M9 16.55a6.5 6.5 0 0 1 6 0" /><path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />' },
  { name: 'WifiOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'wifi off internet offline disconnected network signal wireless', paths: '<line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.58 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M8.5 16.5a6.5 6.5 0 0 1 7 0" />' },
  { name: 'Terminal', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'terminal command bash shell line code tech developer prompt input outline', paths: '<polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />' },
  { name: 'Command', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'command control symbol terminal bash mac key shortcut', paths: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />' },
  { name: 'Code', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'code tag system program custom developers layout prompt slash xml html script', paths: '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />' },
  { name: 'Battery', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'battery cell power energy charge capacity status outline', paths: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line x1="23" y1="11" x2="23" y2="13" />' },
  { name: 'Power', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'power off on switch energy system shut standby toggle', paths: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" />' },
  { name: 'MousePointer', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'mouse pointer cursor navigation click select point direction target', paths: '<polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" /><line x1="13" y1="13" x2="19" y2="19" />' },
  { name: 'Disc', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'disc vinyl record music compact cd disk sound music media player', paths: '<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />' },

  // 7. Media & Players (20 icons)
  { name: 'Play', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'play start video audio media player run active positive arrow', paths: '<polygon points="5 3 19 12 5 21 5 3" />' },
  { name: 'Pause', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'pause stop stand hold media audio player block parallel', paths: '<rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />' },
  { name: 'Stop', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'stop block finish clear media player square end', paths: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2" />' },
  { name: 'SkipForward', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'skip forward fast next seek media audio player direction', paths: '<polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" />' },
  { name: 'SkipBack', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'skip back fast previous seek media audio player direction', paths: '<polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="5" x2="5" y2="19" />' },
  { name: 'Volume', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'volume sound speaker audio voice talk noise hear static megaphone', paths: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />' },
  { name: 'VolumeX', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'volume x mute silent quiet no sound audio speaker voice', paths: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />' },
  { name: 'Volume1', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'volume 1 low sound speak audio megaphone talk voice media', paths: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />' },
  { name: 'Volume2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'volume 2 high sound loud speak voice hear audio broadcast megaphone', paths: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />' },
  { name: 'Video', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'video camera record film movie capture show screen play projector', paths: '<polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />' },
  { name: 'VideoOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'video off disconnect hide secure camera off recorder cancel', paths: '<path d="M10.66 6H14a2 2 0 0 1 2 2v3.34l5.24-3.84A1 1 0 0 1 23 8v8a1 1 0 0 1-1.76.63L16 12.8V14a2 2 0 0 1-1.34 1.9M2 2l20 20M1 5h11a2 2 0 0 1 2 2v7.5M4 19h8a2 2 0 0 0 2-2v-3" />' },
  { name: 'Mic', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'mic microphone sound record voice speak talk singer speech podcast', paths: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />' },
  { name: 'MicOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'mic off silent mute disconnect talk voice speak sound speech', paths: '<line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" /><path d="M19 10v2a6.93 6.93 0 0 1-1.07 3.73M5 10v2a7 7 0 0 0 9.88 6.42" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />' },
  { name: 'Music', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'music melody song note sound voice auditory singer show', paths: '<path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />' },
  { name: 'Film', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'film video camera recorder movie layout strip negative cinema frame', paths: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />' },
  { name: 'Image', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'image photo picture graphic gallery scenery art screenshot portfolio', paths: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polygon points="21 15 16 10 5 21" />' },
  { name: 'Camera', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'camera capture photo snapshot lens image media device art', paths: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />' },
  { name: 'CameraOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'camera off privacy disable lock screen mask snapshot recorder', paths: '<line x1="1" y1="1" x2="23" y2="23" /><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34" /><circle cx="12" cy="13" r="4" />' },
  { name: 'Cast', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cast tv wireless share signal stream mirror monitor screen tech broadcast', paths: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01" />' },
  { name: 'Radio', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'radio signal sound audio broadcast podcast news static voice wave', paths: '<circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />' },

  // 8. E-Commerce & Financials (20 icons)
  { name: 'ShoppingBag', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'shopping bag purchase product cart transaction store sale', paths: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />' },
  { name: 'ShoppingCart', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'shopping cart buy basket market store commerce online sale pay', paths: '<circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />' },
  { name: 'Tag', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'tag label ticket price discount coupon category metadata sale', paths: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />' },
  { name: 'Gift', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'gift present surprise ribbon pack box anniversary holiday sale', paths: '<polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />' },
  { name: 'Award', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'award prize medal ribbon premium merit champion honor score certificate', paths: '<circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />' },
  { name: 'Trophy', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'trophy champion win first award score prize cup gold merit', paths: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" /><path d="M12 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6z" />' },
  { name: 'Briefcase', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'briefcase work job business bag luggage case suitcase employment career', paths: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />' },
  { name: 'CreditCard', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'credit card pay bank transaction money currency cost finance shopping outline', paths: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />' },
  { name: 'DollarSign', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'dollar sign money currency cost cash wealth finance investment sales pay USD', paths: '<line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />' },
  { name: 'Percent', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'percent discount margin proportion commission stats math division calculation', paths: '<line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />' },
  { name: 'TrendingUp', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'trending up growth profit chart increase progress metrics positive direction analytics', paths: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />' },
  { name: 'TrendingDown', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'trending down loss negative decrease chart decline metrics analytics', paths: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />' },
  { name: 'BarChart', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'bar chart metrics graph statistics progress analytics dashboards columns', paths: '<line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />' },
  { name: 'BarChart2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'bar chart 2 horizontal metrics graph statistics analytics dashboards data layout', paths: '<line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />' },
  { name: 'PieChart', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'pie chart division portion metrics graph statistics dashboards analytics structure', paths: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />' },
  { name: 'ActivityChart', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'activity chart analytics live update graph wave tracking frequency', paths: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />' },
  { name: 'Truck', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'truck shipping delivery transport carriage vehicle cargo logistic commerce', paths: '<rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />' },
  { name: 'Pocket', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'pocket secure collect wallet save storage gather asset outline', paths: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" /><polyline points="8 10 12 14 16 10" />' },
  { name: 'Ticket', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'ticket coupon pass code booking movie flight gate access voucher', paths: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" /><line x1="9" y1="5" x2="9" y2="19" /><line x1="15" y1="5" x2="15" y2="19" />' },
  { name: 'Discount', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'discount percent tag coupon sale price deal campaign', paths: '<line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />' },

  // 9. Brands & Tech Corporates (20 icons)
  { name: 'GitHub', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'github brand social developer open source code git repository profile outline', paths: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />' },
  { name: 'Twitter', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'twitter brand social bird talk post tweet message news outline', paths: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />' },
  { name: 'Facebook', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'facebook brand social network contact message sharing community outline', paths: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />' },
  { name: 'Instagram', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'instagram brand social camera photo sharing visual network outline', paths: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />' },
  { name: 'Youtube', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'youtube brand social video player movie broadcast stream channel outline', paths: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />' },
  { name: 'Linkedin', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'linkedin brand social network career job professional contact message outline', paths: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />' },
  { name: 'Globe', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'globe earth world map planet navigation browser chrome internet network translation outline', paths: '<circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />' },
  { name: 'Chrome', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'chrome browser google internet web online explorer outline', paths: '<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="21.17" y1="8" x2="12" y2="8" /><line x1="3.95" y1="6.06" x2="9" y2="14.81" /><line x1="10.88" y1="21.94" x2="19" y2="7.88" />' },
  { name: 'Gitlab', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'gitlab brand social repository code version control project git devops', paths: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l2.87-8.83a.85.85 0 0 1 .8-.58h3.32l1.66-5.1a.86.86 0 0 1 1.63 0l1.66 5.1h3.32a.85.85 0 0 1 .8.58l2.87 8.83a.84.84 0 0 1-.3.94z" />' },
  { name: 'GitBranch', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'git branch code fork repository path version control dynamic', paths: '<line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />' },
  { name: 'GitCommit', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'git commit code trace path version control point history node save', paths: '<circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" />' },
  { name: 'GitMerge', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'git merge combine branch version control path repository dynamic', paths: '<circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" />' },
  { name: 'GitPullRequest', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'git pull request code merge collaborate team branch open source repo', paths: '<circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 15V9a4 4 0 0 0-4-4H9" /><line x1="6" y1="9" x2="6" y2="15" />' },
  { name: 'Slack', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'slack corporate brand message chat team corporate collaboration workspace', paths: '<circle cx="12" cy="12" r="9" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="12" y1="8" x2="12" y2="16" />' },
  { name: 'Figma', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'figma brand ui design designer mockup prototype wireframe developer', paths: '<path d="M12 6a3 3 0 1 0-3-3v3zm0 0a3 3 0 1 1 3-3v3zm0 6a3 3 0 1 0-3-3v3zm0 0a3 3 0 1 1 3-3v3zm-3 6a3 3 0 1 0-3-3v3zm6 0a3 3 0 1 1-3-3" />' },
  { name: 'Dribbble', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'dribbble brand design portfolio visual art creative artist showcase', paths: '<circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />' },
  { name: 'Codepen', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'codepen brand editor developer code html css script open source online', paths: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /><polyline points="2 15.5 12 9 22 15.5" /><polyline points="2 8.5 12 15 22 8.5" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="22" />' },
  { name: 'Twitch', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'twitch brand stream gamer broadcast dynamic social live video channel', paths: '<path d="M21 2H3v16h5v4l4-4h5l5-5V2zm-2 10l-3 3h-4l-3 3v-3H7V4h12v8z" /><line x1="14" y1="6" x2="14" y2="10" /><line x1="9" y1="6" x2="9" y2="10" />' },
  { name: 'Android', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'android brand google phone device mobile screen corporate outline', paths: '<circle cx="12" cy="12" r="10" /><line x1="7" y1="8" x2="7.01" y2="8" /><line x1="17" y1="8" x2="17.01" y2="8" /><path d="M12 16v5M8 12v4M16 12v4" />' },
  { name: 'Apple', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'apple brand device iphone mac ios laptop corporate tablet', paths: '<path d="M12 2C8 2 6 5 6 9c0 5 4 11 6 11s6-6 6-11c0-4-2-7-6-7z" /><path d="M12 2c0-1 1-2 2-2" />' },

  // 10. Weather & Environment (15 icons)
  { name: 'SunCloud', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sun cloud sunny partial weather sky temperature climate brightness day', paths: '<path d="M12 10a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" /><path d="M18 14h.01" />' },
  { name: 'CloudRain', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cloud rain weather storm wet shower forecast climate fluid drops water', paths: '<line x1="16" y1="13" x2="16" y2="21" /><line x1="8" y1="13" x2="8" y2="21" /><line x1="12" y1="15" x2="12" y2="23" /><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />' },
  { name: 'CloudSnow', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cloud snow weather cold winter frost ice crystal forecast', paths: '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" /><line x1="8" y1="16" x2="8.01" y2="16" /><line x1="8" y1="20" x2="8.01" y2="20" /><line x1="12" y1="18" x2="12.01" y2="18" /><line x1="16" y1="16" x2="16.01" y2="16" /><line x1="16" y1="20" x2="16.01" y2="20" />' },
  { name: 'CloudLightning', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cloud lightning storm thunder hazard weather electricity energy power dangerous', paths: '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58" /><polygon points="13 11 9 17 12 17 11 23 15 17 12 17 13 11" />' },
  { name: 'CloudDrizzle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'cloud drizzle mist rain fog climate forecast forecast weather wet drops', paths: '<line x1="8" y1="19" x2="8" y2="21" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="16" y1="19" x2="16" y2="21" /><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />' },
  { name: 'Wind', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'wind blow air weather motion draft speed current storm dynamic gas', paths: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />' },
  { name: 'Umbrella', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'umbrella rain weather storm guard protect safety outline', paths: '<path d="M23 12a11.02 11.02 0 0 0-22 0zm-11 0v9a2 2 0 0 1-4 0" />' },
  { name: 'Sunrise', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sunrise sun morning weather dawn rise sky beginning light glow', paths: '<path d="M18 22H6M12 2v14M12 2l-4 4M12 2l4 4M8 18H4a8 8 0 0 1 16 0h-4M12 18H12" />' },
  { name: 'Sunset', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sunset sun evening weather dusk descent sky end dark glow', paths: '<path d="M18 22H6M12 16v6M12 22l-4-4M12 22l4-4M8 12H4a8 8 0 0 1 16 0h-4" />' },
  { name: 'Thermometer', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'thermometer temperature hot cold weather climate scale mercury health fever', paths: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />' },
  { name: 'Compass', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'compass navigation map travel direction north south grid location outline', paths: '<circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />' },
  { name: 'MapPin', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'map pin location target spot address gps navigation tracking point outline', paths: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />' },
  { name: 'Map', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'map navigation direction path route travel atlas paper location outline', paths: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />' },
  { name: 'Navigation', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'navigation compass direction map gps tracking target guide travel', paths: '<polygon points="3 11 22 2 13 21 11 13 3 11" />' },
  { name: 'Navigation2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'navigation 2 compass direction gps tracking map locator travel', paths: '<polygon points="12 2 19 21 12 17 5 21 12 2" />' },

  // 11. Office, Communication & Tools (30 icons)
  { name: 'Calendar', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'calendar date time schedule event task plan year month agenda outline', paths: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />' },
  { name: 'Clock', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'clock time hour minute schedule watch stop active outline', paths: '<circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />' },
  { name: 'Paperclip', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'paperclip attachment file link bind clip join document metadata list outline', paths: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />' },
  { name: 'Share2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'share send distribute network link social forward outline', paths: '<circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />' },
  { name: 'PenTool', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'pen tool draw vector design figma bezier curve points custom path', paths: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="12" r="3" />' },
  { name: 'Phone', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'phone call telephone communication contact dial receiver ring', paths: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />' },
  { name: 'PhoneCall', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'phone call communication contact active signal sound ringing', paths: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6A5 5 0 0 1 18 10" />' },
  { name: 'PhoneOff', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'phone off mute disconnect communication silence reject ban', paths: '<line x1="1" y1="1" x2="23" y2="23" /><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11" />' },
  { name: 'PhoneIncoming', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'phone incoming call communication receive dynamic caller', paths: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><line x1="23" y1="2" x2="16" y2="9" /><polyline points="16 4 16 9 21 9" />' },
  { name: 'PhoneOutgoing', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'phone outgoing call communication dial out target proceed', paths: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><line x1="16" y1="9" x2="23" y2="2" /><polyline points="21 2 23 2 23 4" />' },
  { name: 'MessageSquare', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'message square chat bubble comment dialogue contact feedback communication', paths: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />' },
  { name: 'MessageCircle', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'message circle chat round dialogue comment bubble talk contact', paths: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />' },
  { name: 'Coffee', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'coffee cup mug drink beverage hot tea steam morning break cafe office', paths: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />' },
  { name: 'Printer', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'printer print sheet document paper hardware tech corporate machine office', paths: '<polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" />' },
  { name: 'Send', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'send forward message mail dispatch paper airplane fly dispatch submit', paths: '<line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />' },
  { name: 'Save', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'save store floppy disk backup database record storage write', paths: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />' },
  { name: 'Scissors', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'scissors cut split trim divide office tool craft', paths: '<circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="9.8" y1="8.2" x2="21" y2="19.4" /><line x1="21" y1="4.6" x2="9.8" y2="15.8" />' },
  { name: 'AtSign', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'at sign mail email mention address network contact internet', paths: '<circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />' },
  { name: 'Hash', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'hash number tag metadata topic category grid key symbol pound', paths: '<line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" />' },
  { name: 'Link2', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'link 2 bind attach hyperlink connection URL address anchor', paths: '<line x1="8" y1="12" x2="16" y2="12" /><path d="M12 5h3.5a5 5 0 0 1 0 10H12m0-10H8.5a5 5 0 0 0 0 10H12" />' },
  { name: 'ExternalLink', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'external link web target redirect out open window navigation url', paths: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />' },
  { name: 'MoreHorizontal', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'more horizontal dots three options config menu details expand list', paths: '<circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />' },
  { name: 'MoreVertical', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'more vertical dots three options config menu details list expand vertical', paths: '<circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />' },
  { name: 'RotateCw', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'rotate cw reload clockwise repeat spin refresh loop transition', paths: '<polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />' },
  { name: 'RotateCcw', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'rotate ccw reload counter clockwise undo backup restore reverse repeat', paths: '<polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />' },
  { name: 'Repeat', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'repeat loop cycle reload sync clockwise media playlist', paths: '<polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />' },
  { name: 'Infinity', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'infinity endless loop forever cycle math continuous limit', paths: '<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />' },
  { name: 'SlidersControl', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'sliders configuration control panel adjust volume speed light', paths: '<line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />' },
  { name: 'Download', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'download import fetch receive get save file storage incoming', paths: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />' },
  { name: 'Upload', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', tags: 'upload export dispatch send submit cloud server output', paths: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />' }
];

const componentsDir = path.resolve('src/components');
const indexFile = path.resolve('src/index.ts');
const demoAppFile = path.resolve('demo/src/App.tsx');

console.log(`🚀 Starting Super Suite Generator Script... Target: ${icons.length} Icons!`);

// 1. Generate TSX files inside src/components/
icons.forEach((icon) => {
  const code = `import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ${icon.name} = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    return (
      <IconBase
        ref={ref}
        viewBox="${icon.viewBox}"
        fill="${icon.fill}"
        stroke="${icon.stroke}"
        strokeWidth="${icon.strokeWidth}"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        ${icon.paths.trim()}
      </IconBase>
    );
  }
);

${icon.name}.displayName = '${icon.name}';
`;

  const filePath = path.join(componentsDir, `${icon.name}.tsx`);
  fs.writeFileSync(filePath, code);
});
console.log(`✅ Completed: Generated ${icons.length} component tệp tin TSX successfully!`);

// 2. Generate updated index.ts to export all
let indexContent = `export { IconBase } from './components/IconBase';
export type { IconBaseProps } from './components/IconBase';
export { HomeIcon } from './components/HomeIcon';
export { LoadingSpinnerIcon } from './components/LoadingSpinnerIcon';
`;

icons.forEach((icon) => {
  indexContent += `export { ${icon.name} } from './components/${icon.name}';\n`;
});
fs.writeFileSync(indexFile, indexContent);
console.log('✅ Completed: Registered all exports cleanly inside src/index.ts!');

// 3. GENERATE DYNAMIC CODE FOR demo/src/App.tsx
const appImports = icons.map((icon) => `  ${icon.name}`).join(',\n');
const appCatalogEntries = icons.map((icon) => `  { name: '${icon.name}', Component: ${icon.name}, tags: '${icon.tags}' }`).join(',\n');

const appTsxContent = `import React, { useState } from 'react';
// Import all generated icons dynamically from compiled library exports
import {
  HomeIcon,
  LoadingSpinnerIcon,
${appImports}
} from '../../src';

// Central Dynamic Catalog listing all premium icons
const CATALOG = [
  { name: 'HomeIcon', Component: HomeIcon, tags: 'home house building shelter' },
  { name: 'LoadingSpinnerIcon', Component: LoadingSpinnerIcon, tags: 'loading spinner progress active circle arc rotate' },
${appCatalogEntries}
];

export default function App() {
  // Sandbox State Controls
  const [selectedIconName, setSelectedIconName] = useState<string>('HomeIcon');
  const [size, setSize] = useState<number>(56);
  const [color, setColor] = useState<string>('#6366f1');
  const [hoverColor, setHoverColor] = useState<string>('#10b981');
  const [animation, setAnimation] = useState<'scale' | 'rotate' | 'color-shift' | 'glow' | 'loading' | 'none'>('glow');
  const [animationDuration, setAnimationDuration] = useState<number>(0.8);
  const [hoverEffect, setHoverEffect] = useState<boolean>(true);

  // Search Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Retrieve active selected component details
  const activeIconItem = CATALOG.find((item) => item.name === selectedIconName) || CATALOG[0];
  const ActiveIconComponent = activeIconItem.Component;

  // Filter Catalog dynamically as user types
  const filteredIcons = CATALOG.filter((icon) => {
    const query = searchQuery.toLowerCase();
    return icon.name.toLowerCase().includes(query) || icon.tags.toLowerCase().includes(query);
  });

  // Generate copyable React code snippet
  const getCodeSnippet = () => {
    let codeStr = \`<\${selectedIconName}\\n\`;
    codeStr += \`  size={\${size}}\\n\`;
    codeStr += \`  color="\${color}"\\n\`;
    
    if (selectedIconName === 'LoadingSpinnerIcon' && animation === 'loading') {
      // already default loader
    } else if (animation !== 'none') {
      codeStr += \`  animation="\${animation}"\\n\`;
    }

    if (animationDuration !== 0.3 && !(selectedIconName === 'LoadingSpinnerIcon' && animationDuration === 1)) {
      codeStr += \`  animationDuration={\${animationDuration}}\\n\`;
    }

    if (hoverEffect) {
      codeStr += \`  hoverEffect={true}\\n\`;
    }

    if (['color-shift', 'glow'].includes(animation)) {
      codeStr += \`  hoverColor="\${hoverColor}"\\n\`;
    }
    
    codeStr += \`/>\`;
    return codeStr;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Styles definitions for rich UI layout
  const pageContainer: React.CSSProperties = {
    minHeight: '100vh',
    padding: '40px 20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  };

  const glowBlob1: React.CSSProperties = {
    position: 'absolute',
    top: '-5%',
    left: '5%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  };

  const glowBlob2: React.CSSProperties = {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '550px',
    height: '550px',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  };

  const layout: React.CSSProperties = {
    maxWidth: '1350px',
    margin: '0 auto',
    zIndex: 1,
    position: 'relative',
  };

  const header: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const badge: React.CSSProperties = {
    display: 'inline-block',
    background: 'rgba(99, 102, 241, 0.15)',
    color: '#a5b4fc',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '6px 16px',
    borderRadius: '9999px',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    marginBottom: '16px',
  };

  const title: React.CSSProperties = {
    fontSize: '44px',
    fontWeight: 800,
    background: 'linear-gradient(to right, #ffffff, #c7d2fe, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    marginBottom: '8px',
  };

  const subtitle: React.CSSProperties = {
    fontSize: '16px',
    color: '#94a3b8',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: 1.6,
  };

  // Main split interface grid
  const mainWorkspaceGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 420px',
    gap: '30px',
    alignItems: 'start',
    marginBottom: '60px',
  };

  const leftCatalogPanel: React.CSSProperties = {
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  };

  const searchBoxContainer: React.CSSProperties = {
    marginBottom: '20px',
    position: 'relative',
  };

  const searchInput: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '16px 180px 16px 20px',
    background: '#090d16',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
  };

  const iconCatalogGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(115px, 1fr))',
    gap: '12px',
    maxHeight: '620px',
    overflowY: 'auto',
    paddingRight: '8px',
  };

  const iconCatalogCard = (isActive: boolean): React.CSSProperties => ({
    background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(30, 41, 59, 0.2)',
    border: isActive ? '2px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '12px 6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'center',
    boxShadow: isActive ? '0 0 15px rgba(99, 102, 241, 0.25)' : 'none',
  });

  const catalogIconName: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 500,
    color: '#94a3b8',
    marginTop: '8px',
    wordBreak: 'break-all',
  };

  const rightSandboxPanel: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const card: React.CSSProperties = {
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  };

  const previewBox: React.CSSProperties = {
    ...card,
    background: 'rgba(30, 41, 59, 0.25)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    position: 'relative',
  };

  const inputGroup: React.CSSProperties = {
    marginBottom: '16px',
  };

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    color: '#94a3b8',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const select: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    background: '#1e293b',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: '#f8fafc',
    outline: 'none',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const colorGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  };

  const colorInputWrapper: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    background: '#1e293b',
    padding: '6px 10px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  };

  const colorPicker: React.CSSProperties = {
    WebkitAppearance: 'none',
    border: 'none',
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    cursor: 'pointer',
    background: 'none',
    padding: 0,
  };

  const codeBox: React.CSSProperties = {
    background: '#090d16',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const copyButton: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: copied ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    padding: '6px 12px',
    fontSize: '11px',
    fontWeight: 600,
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  return (
    <div style={pageContainer} className="bg-grid-pattern">
      <div style={glowBlob1}></div>
      <div style={glowBlob2}></div>

      <div style={layout}>
        {/* Header */}
        <header style={header}>
          <span style={badge}>Interactive Sandbox Browser</span>
          <h1 style={title}>Super Suite Icon Library</h1>
          <p style={subtitle}>
            A massive premium library consisting of {CATALOG.length} dynamic, customizable animated React icons. Browse the catalog, filter, toggle animations and generate copy-paste React snippets.
          </p>
        </header>

        {/* Workspace Split */}
        <div style={mainWorkspaceGrid}>
          
          {/* LEFT: Catalog Explorer Grid */}
          <div style={leftCatalogPanel}>
            <div style={searchBoxContainer}>
              <input
                type="text"
                placeholder={\`🔍 Search \${CATALOG.length} icons instantly... (e.g. arrow, wifi, shopping, eye, brand)\`}
                style={searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span style={{ position: 'absolute', right: '16px', top: '16px', fontSize: '13px', color: '#64748b' }}>
                Showing {filteredIcons.length} of {CATALOG.length}
              </span>
            </div>

            <div style={iconCatalogGrid}>
              {filteredIcons.map((item) => {
                const IconComp = item.Component;
                const isActive = item.name === selectedIconName;
                return (
                  <div
                    key={item.name}
                    style={iconCatalogCard(isActive)}
                    onClick={() => {
                      setSelectedIconName(item.name);
                      if (item.name === 'LoadingSpinnerIcon') {
                        setAnimation('loading');
                        setAnimationDuration(1.2);
                        setHoverEffect(false);
                      }
                    }}
                  >
                    <IconComp 
                      size={24} 
                      color={isActive ? '#ffffff' : '#6366f1'} 
                      animation="scale"
                      hoverEffect={true}
                    />
                    <div style={catalogIconName}>{item.name}</div>
                  </div>
                );
              })}
              
              {filteredIcons.length === 0 && (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
                  No icons found matching "{searchQuery}"
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Selected Preview & Control Sandbox */}
          <div style={rightSandboxPanel}>
            
            {/* Preview canvas */}
            <div style={previewBox}>
              <ActiveIconComponent
                size={size}
                color={color}
                hoverColor={hoverColor}
                animation={animation}
                animationDuration={animationDuration}
                hoverEffect={hoverEffect}
              />
              <span style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                fontSize: '11px',
                fontFamily: 'monospace',
                background: 'rgba(255,255,255,0.05)',
                padding: '4px 8px',
                borderRadius: '6px',
                color: '#818cf8',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                {selectedIconName}
              </span>
            </div>

            {/* Customizer options */}
            <div style={card}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Customizer Control</h3>

              {/* Animation Select */}
              <div style={inputGroup}>
                <span style={label}>Animation Effect</span>
                <select 
                  style={select} 
                  value={animation} 
                  onChange={(e: any) => setAnimation(e.target.value)}
                >
                  <option value="none">None (Static)</option>
                  <option value="scale">Scale (Pulse / Scale-up)</option>
                  <option value="rotate">Rotate (Tilt / Continuous)</option>
                  <option value="color-shift">Color Shift</option>
                  <option value="glow">Glow (Neon Drop-Shadow)</option>
                  <option value="loading">Loading Spinner</option>
                </select>
              </div>

              {/* Dynamic HSL/Hex Colors */}
              <div style={{ ...colorGrid, ...inputGroup }}>
                <div>
                  <span style={label}>Color</span>
                  <div style={colorInputWrapper}>
                    <input 
                      type="color" 
                      style={colorPicker} 
                      value={color} 
                      onChange={(e) => setColor(e.target.value)}
                    />
                    <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{color}</span>
                  </div>
                </div>
                <div>
                  <span style={label}>Hover Color</span>
                  <div style={colorInputWrapper}>
                    <input 
                      type="color" 
                      style={colorPicker} 
                      value={hoverColor} 
                      onChange={(e) => setHoverColor(e.target.value)}
                    />
                    <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{hoverColor}</span>
                  </div>
                </div>
              </div>

              {/* Size slider */}
              <div style={inputGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', ...label }}>
                  <span>Size</span>
                  <span style={{ fontFamily: 'monospace' }}>{size}px</span>
                </div>
                <input 
                  type="range" 
                  min="24" 
                  max="120" 
                  value={size} 
                  onChange={(e) => setSize(Number(e.target.value))}
                />
              </div>

              {/* Speed slider */}
              <div style={inputGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', ...label }}>
                  <span>Speed</span>
                  <span style={{ fontFamily: 'monospace' }}>{animationDuration}s</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="3.0" 
                  step="0.1" 
                  value={animationDuration} 
                  onChange={(e) => setAnimationDuration(Number(e.target.value))}
                />
              </div>

              {/* Trigger Toggle */}
              <div style={{ marginTop: '14px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  <input 
                    type="checkbox" 
                    checked={hoverEffect} 
                    onChange={(e) => setHoverEffect(e.target.checked)}
                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                  />
                  Trigger animation ONLY on hover
                </label>
              </div>
            </div>

            {/* Generated React Code */}
            <div style={codeBox}>
              <button style={copyButton} onClick={copyToClipboard}>
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
              <span style={{ ...label, fontSize: '10px', color: '#6366f1' }}>Live Output React Code</span>
              <pre style={{ margin: '12px 0 0 0', fontFamily: 'monospace', fontSize: '12px', color: '#a5b4fc', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                <code>{getCodeSnippet()}</code>
              </pre>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '35px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
          <p>© 2026 Premium React Icon Library. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(demoAppFile, appTsxContent);
console.log('✅ Completed: Dynamically compiled and rewrote demo/src/App.tsx with all 250+ imports and CATALOG entries!');
console.log('🎉 Project metadata fully compiled! Project successfully upgraded to a Super Suite library!');
