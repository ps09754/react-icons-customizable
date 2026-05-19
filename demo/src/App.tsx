import React, { useState } from 'react';
// Import all generated icons dynamically from compiled library exports
import {
  HomeIcon,
  LoadingSpinnerIcon,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDownRight,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  ArrowUpCircle,
  ArrowDownCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star,
  Heart,
  Bookmark,
  Eye,
  EyeOff,
  Shield,
  ShieldOff,
  Sun,
  Moon,
  Cloud,
  Zap,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users,
  Lock,
  Unlock,
  Key,
  Keyhole,
  Activity,
  Heartbeat,
  Smile,
  Frown,
  Meh,
  Folder,
  FolderPlus,
  FolderMinus,
  FolderX,
  File,
  FileText,
  FilePlus,
  FileMinus,
  FileX,
  Archive,
  Book,
  BookOpen,
  Clipboard,
  Copy,
  HardDrive,
  Database,
  Server,
  Layers,
  Box,
  Package,
  Search,
  Settings,
  Bell,
  BellOff,
  Trash,
  Trash2,
  Edit,
  Edit2,
  Mail,
  Check,
  CheckCircle,
  CheckSquare,
  Plus,
  PlusCircle,
  Minus,
  MinusCircle,
  Close,
  XCircle,
  Menu,
  Grid,
  List,
  Info,
  HelpCircle,
  AlertCircle,
  AlertTriangle,
  Sliders,
  Filter,
  ToggleLeft,
  ToggleRight,
  Link,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Cpu,
  Wifi,
  WifiOff,
  Terminal,
  Command,
  Code,
  Battery,
  Power,
  MousePointer,
  Disc,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Video,
  VideoOff,
  Mic,
  MicOff,
  Music,
  Film,
  Image,
  Camera,
  CameraOff,
  Cast,
  Radio,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Gift,
  Award,
  Trophy,
  Briefcase,
  CreditCard,
  DollarSign,
  Percent,
  TrendingUp,
  TrendingDown,
  BarChart,
  BarChart2,
  PieChart,
  ActivityChart,
  Truck,
  Pocket,
  Ticket,
  Discount,
  GitHub,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  Chrome,
  Gitlab,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Slack,
  Figma,
  Dribbble,
  Codepen,
  Twitch,
  Android,
  Apple,
  SunCloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Wind,
  Umbrella,
  Sunrise,
  Sunset,
  Thermometer,
  Compass,
  MapPin,
  Map,
  Navigation,
  Navigation2,
  Calendar,
  Clock,
  Paperclip,
  Share2,
  PenTool,
  Phone,
  PhoneCall,
  PhoneOff,
  PhoneIncoming,
  PhoneOutgoing,
  MessageSquare,
  MessageCircle,
  Coffee,
  Printer,
  Send,
  Save,
  Scissors,
  AtSign,
  Hash,
  Link2,
  ExternalLink,
  MoreHorizontal,
  MoreVertical,
  RotateCw,
  RotateCcw,
  Repeat,
  Infinity,
  SlidersControl,
  Download,
  Upload
} from '../../src';

// Central Dynamic Catalog listing all premium icons
const CATALOG = [
  { name: 'HomeIcon', Component: HomeIcon, tags: 'home house building shelter' },
  { name: 'LoadingSpinnerIcon', Component: LoadingSpinnerIcon, tags: 'loading spinner progress active circle arc rotate' },
  { name: 'ArrowUp', Component: ArrowUp, tags: 'arrow up direction raise elevation north' },
  { name: 'ArrowDown', Component: ArrowDown, tags: 'arrow down direction lower descend south' },
  { name: 'ArrowLeft', Component: ArrowLeft, tags: 'arrow left direction back prev west' },
  { name: 'ArrowRight', Component: ArrowRight, tags: 'arrow right direction forward next east' },
  { name: 'ChevronUp', Component: ChevronUp, tags: 'chevron up angle fold toggle top upward' },
  { name: 'ChevronDown', Component: ChevronDown, tags: 'chevron down angle fold toggle expand lower' },
  { name: 'ChevronLeft', Component: ChevronLeft, tags: 'chevron left angle slide previous back' },
  { name: 'ChevronRight', Component: ChevronRight, tags: 'chevron right angle slide forward next' },
  { name: 'ChevronsUp', Component: ChevronsUp, tags: 'chevrons up double shift fast top' },
  { name: 'ChevronsDown', Component: ChevronsDown, tags: 'chevrons down double shift fast bottom' },
  { name: 'ChevronsLeft', Component: ChevronsLeft, tags: 'chevrons left double back fast skip rewind' },
  { name: 'ChevronsRight', Component: ChevronsRight, tags: 'chevrons right double forward fast skip forward' },
  { name: 'ArrowUpLeft', Component: ArrowUpLeft, tags: 'arrow diagonal up left north west' },
  { name: 'ArrowUpRight', Component: ArrowUpRight, tags: 'arrow diagonal up right north east' },
  { name: 'ArrowDownLeft', Component: ArrowDownLeft, tags: 'arrow diagonal down left south west' },
  { name: 'ArrowDownRight', Component: ArrowDownRight, tags: 'arrow diagonal down right south east' },
  { name: 'CornerDownLeft', Component: CornerDownLeft, tags: 'arrow corner down left curved transition' },
  { name: 'CornerDownRight', Component: CornerDownRight, tags: 'arrow corner down right curved transition' },
  { name: 'CornerUpLeft', Component: CornerUpLeft, tags: 'arrow corner up left curved transition' },
  { name: 'CornerUpRight', Component: CornerUpRight, tags: 'arrow corner up right curved transition' },
  { name: 'CaretUp', Component: CaretUp, tags: 'caret up arrow micro triangle top' },
  { name: 'CaretDown', Component: CaretDown, tags: 'caret down arrow micro triangle bottom' },
  { name: 'CaretLeft', Component: CaretLeft, tags: 'caret left arrow micro triangle previous' },
  { name: 'CaretRight', Component: CaretRight, tags: 'caret right arrow micro triangle next' },
  { name: 'ArrowUpCircle', Component: ArrowUpCircle, tags: 'arrow up circle ring north top' },
  { name: 'ArrowDownCircle', Component: ArrowDownCircle, tags: 'arrow down circle ring south bottom' },
  { name: 'ArrowLeftCircle', Component: ArrowLeftCircle, tags: 'arrow left circle ring west back' },
  { name: 'ArrowRightCircle', Component: ArrowRightCircle, tags: 'arrow right circle ring east next' },
  { name: 'Circle', Component: Circle, tags: 'circle round ring geometry shape' },
  { name: 'Square', Component: Square, tags: 'square box geometry shape outline block' },
  { name: 'Triangle', Component: Triangle, tags: 'triangle delta geometry shape warning pyramid' },
  { name: 'Hexagon', Component: Hexagon, tags: 'hexagon geometry shape cell honeycomb bolt' },
  { name: 'Octagon', Component: Octagon, tags: 'octagon stop geometry shape sign red' },
  { name: 'Star', Component: Star, tags: 'star favorite rating highlight premium review gold' },
  { name: 'Heart', Component: Heart, tags: 'heart love like favorite health active blood pulse red' },
  { name: 'Bookmark', Component: Bookmark, tags: 'bookmark tag save read later highlight ribbon' },
  { name: 'Eye', Component: Eye, tags: 'eye view look watch see watch visibility preview' },
  { name: 'EyeOff', Component: EyeOff, tags: 'eye off hide blind secure private invisible mask secret' },
  { name: 'Shield', Component: Shield, tags: 'shield guard protect secure security safe armor' },
  { name: 'ShieldOff', Component: ShieldOff, tags: 'shield off unsecure vulnerable guard unprotected' },
  { name: 'Sun', Component: Sun, tags: 'sun hot day warm weather brightness light glow' },
  { name: 'Moon', Component: Moon, tags: 'moon night dark cold weather sleep stars nature' },
  { name: 'Cloud', Component: Cloud, tags: 'cloud weather storage backup internet database scale' },
  { name: 'Zap', Component: Zap, tags: 'zap thunder lightning storm speed fast energy electricity power' },
  { name: 'User', Component: User, tags: 'user person account profile member key' },
  { name: 'UserPlus', Component: UserPlus, tags: 'user plus add member invite friend positive' },
  { name: 'UserMinus', Component: UserMinus, tags: 'user minus delete remove subtract member friend negative' },
  { name: 'UserCheck', Component: UserCheck, tags: 'user check verify success ok complete member' },
  { name: 'UserX', Component: UserX, tags: 'user x close delete ban cancel block reject' },
  { name: 'Users', Component: Users, tags: 'users group team community crowd crew assembly' },
  { name: 'Lock', Component: Lock, tags: 'lock secure private safe safety block guard password' },
  { name: 'Unlock', Component: Unlock, tags: 'unlock open clear unsafe expose release' },
  { name: 'Key', Component: Key, tags: 'key unlock access door credential secret security' },
  { name: 'Keyhole', Component: Keyhole, tags: 'keyhole door lock password security safe credential' },
  { name: 'Activity', Component: Activity, tags: 'activity pulse heart rate medical tracing graph chart health fitness line' },
  { name: 'Heartbeat', Component: Heartbeat, tags: 'heartbeat pulse health medical doctor love rate' },
  { name: 'Smile', Component: Smile, tags: 'smile happy emotion face feedback rate rating positive' },
  { name: 'Frown', Component: Frown, tags: 'frown sad emotion face feedback rate rating negative' },
  { name: 'Meh', Component: Meh, tags: 'meh normal neutral emotion face feedback rate rating medium' },
  { name: 'Folder', Component: Folder, tags: 'folder directory storage container file system' },
  { name: 'FolderPlus', Component: FolderPlus, tags: 'folder plus add new store create dynamic' },
  { name: 'FolderMinus', Component: FolderMinus, tags: 'folder minus delete remove subtract reduce' },
  { name: 'FolderX', Component: FolderX, tags: 'folder x close ban block delete remove cancel' },
  { name: 'File', Component: File, tags: 'file document sheet page write note text' },
  { name: 'FileText', Component: FileText, tags: 'file text document writing details list paragraph' },
  { name: 'FilePlus', Component: FilePlus, tags: 'file plus add create new document negative template' },
  { name: 'FileMinus', Component: FileMinus, tags: 'file minus delete remove sheet document template' },
  { name: 'FileX', Component: FileX, tags: 'file x close cancel document sheet trash remove' },
  { name: 'Archive', Component: Archive, tags: 'archive store save repository box database chest package history' },
  { name: 'Book', Component: Book, tags: 'book read library guide literature manual book store notebook' },
  { name: 'BookOpen', Component: BookOpen, tags: 'book open read library literature learning study booklet' },
  { name: 'Clipboard', Component: Clipboard, tags: 'clipboard board copy task memo checklist board' },
  { name: 'Copy', Component: Copy, tags: 'copy duplicate clone paper double file replicate' },
  { name: 'HardDrive', Component: HardDrive, tags: 'hard drive disk storage server database tech backup' },
  { name: 'Database', Component: Database, tags: 'database storage stack cylinder server backup memory tech' },
  { name: 'Server', Component: Server, tags: 'server terminal computer storage hardware database hosting rack' },
  { name: 'Layers', Component: Layers, tags: 'layers stack multiple cards sheets layout level cascade' },
  { name: 'Box', Component: Box, tags: 'box package storage delivery shipping cube geometric container' },
  { name: 'Package', Component: Package, tags: 'package box delivery shipping storage gift parcel transport' },
  { name: 'Search', Component: Search, tags: 'search find magnifying glass lens scan look' },
  { name: 'Settings', Component: Settings, tags: 'settings gear cog config custom tools options adjust' },
  { name: 'Bell', Component: Bell, tags: 'bell notification alert alarm notice sound ring' },
  { name: 'BellOff', Component: BellOff, tags: 'bell off quiet mute notification silent disable' },
  { name: 'Trash', Component: Trash, tags: 'trash delete remove clean recycle bin waste garbage' },
  { name: 'Trash2', Component: Trash2, tags: 'trash 2 bucket delete bin empty garbage clear' },
  { name: 'Edit', Component: Edit, tags: 'edit pencil pen modify write note draw sketch' },
  { name: 'Edit2', Component: Edit2, tags: 'edit 2 pen writing drawing signature signature' },
  { name: 'Mail', Component: Mail, tags: 'mail email envelope post letter message inbox contact' },
  { name: 'Check', Component: Check, tags: 'check tick ok correct verified yes pass confirm done' },
  { name: 'CheckCircle', Component: CheckCircle, tags: 'check circle correct success verified done task finished' },
  { name: 'CheckSquare', Component: CheckSquare, tags: 'check square box verify dynamic list select checkmark' },
  { name: 'Plus', Component: Plus, tags: 'plus add new positive mathematical sum expand increment' },
  { name: 'PlusCircle', Component: PlusCircle, tags: 'plus circle ring add increase sum template positive create' },
  { name: 'Minus', Component: Minus, tags: 'minus sub abstract reduce dash line math negative decrease' },
  { name: 'MinusCircle', Component: MinusCircle, tags: 'minus circle ring block restrict deny negative decrease' },
  { name: 'Close', Component: Close, tags: 'close x exit cancel reject delete abort multiply cross' },
  { name: 'XCircle', Component: XCircle, tags: 'x circle delete cancel restrict block close cross' },
  { name: 'Menu', Component: Menu, tags: 'menu burger list bar options drawer navigation' },
  { name: 'Grid', Component: Grid, tags: 'grid box panel dashboard blocks tiles columns layout' },
  { name: 'List', Component: List, tags: 'list menu bullet catalog array layout options items' },
  { name: 'Info', Component: Info, tags: 'info detail status help advice guideline description' },
  { name: 'HelpCircle', Component: HelpCircle, tags: 'help query ask search faq question circle guide support' },
  { name: 'AlertCircle', Component: AlertCircle, tags: 'alert circle warning error danger attention info active' },
  { name: 'AlertTriangle', Component: AlertTriangle, tags: 'alert triangle warning danger attention caution error block' },
  { name: 'Sliders', Component: Sliders, tags: 'sliders settings configurations controls adjust panel metrics' },
  { name: 'Filter', Component: Filter, tags: 'filter search sort funel query data segment block' },
  { name: 'ToggleLeft', Component: ToggleLeft, tags: 'toggle left turn off switch disable standby inactive' },
  { name: 'ToggleRight', Component: ToggleRight, tags: 'toggle right turn on switch enable active run' },
  { name: 'Link', Component: Link, tags: 'link chain hyperlink bind connect attach address URL' },
  { name: 'Monitor', Component: Monitor, tags: 'monitor screen desktop tv display tech machine system' },
  { name: 'Smartphone', Component: Smartphone, tags: 'smartphone mobile phone device cellular contact tech caller' },
  { name: 'Tablet', Component: Tablet, tags: 'tablet ipad screen hand device technology touch pad' },
  { name: 'Laptop', Component: Laptop, tags: 'laptop notebook computer device tech screen workstation portable' },
  { name: 'Tv', Component: Tv, tags: 'tv television display monitor video broadcast antenna show' },
  { name: 'Cpu', Component: Cpu, tags: 'cpu chip processor brain computer hardware circuit tech board' },
  { name: 'Wifi', Component: Wifi, tags: 'wifi signal internet network wireless connection online radar' },
  { name: 'WifiOff', Component: WifiOff, tags: 'wifi off internet offline disconnected network signal wireless' },
  { name: 'Terminal', Component: Terminal, tags: 'terminal command bash shell line code tech developer prompt input outline' },
  { name: 'Command', Component: Command, tags: 'command control symbol terminal bash mac key shortcut' },
  { name: 'Code', Component: Code, tags: 'code tag system program custom developers layout prompt slash xml html script' },
  { name: 'Battery', Component: Battery, tags: 'battery cell power energy charge capacity status outline' },
  { name: 'Power', Component: Power, tags: 'power off on switch energy system shut standby toggle' },
  { name: 'MousePointer', Component: MousePointer, tags: 'mouse pointer cursor navigation click select point direction target' },
  { name: 'Disc', Component: Disc, tags: 'disc vinyl record music compact cd disk sound music media player' },
  { name: 'Play', Component: Play, tags: 'play start video audio media player run active positive arrow' },
  { name: 'Pause', Component: Pause, tags: 'pause stop stand hold media audio player block parallel' },
  { name: 'Stop', Component: Stop, tags: 'stop block finish clear media player square end' },
  { name: 'SkipForward', Component: SkipForward, tags: 'skip forward fast next seek media audio player direction' },
  { name: 'SkipBack', Component: SkipBack, tags: 'skip back fast previous seek media audio player direction' },
  { name: 'Volume', Component: Volume, tags: 'volume sound speaker audio voice talk noise hear static megaphone' },
  { name: 'VolumeX', Component: VolumeX, tags: 'volume x mute silent quiet no sound audio speaker voice' },
  { name: 'Volume1', Component: Volume1, tags: 'volume 1 low sound speak audio megaphone talk voice media' },
  { name: 'Volume2', Component: Volume2, tags: 'volume 2 high sound loud speak voice hear audio broadcast megaphone' },
  { name: 'Video', Component: Video, tags: 'video camera record film movie capture show screen play projector' },
  { name: 'VideoOff', Component: VideoOff, tags: 'video off disconnect hide secure camera off recorder cancel' },
  { name: 'Mic', Component: Mic, tags: 'mic microphone sound record voice speak talk singer speech podcast' },
  { name: 'MicOff', Component: MicOff, tags: 'mic off silent mute disconnect talk voice speak sound speech' },
  { name: 'Music', Component: Music, tags: 'music melody song note sound voice auditory singer show' },
  { name: 'Film', Component: Film, tags: 'film video camera recorder movie layout strip negative cinema frame' },
  { name: 'Image', Component: Image, tags: 'image photo picture graphic gallery scenery art screenshot portfolio' },
  { name: 'Camera', Component: Camera, tags: 'camera capture photo snapshot lens image media device art' },
  { name: 'CameraOff', Component: CameraOff, tags: 'camera off privacy disable lock screen mask snapshot recorder' },
  { name: 'Cast', Component: Cast, tags: 'cast tv wireless share signal stream mirror monitor screen tech broadcast' },
  { name: 'Radio', Component: Radio, tags: 'radio signal sound audio broadcast podcast news static voice wave' },
  { name: 'ShoppingBag', Component: ShoppingBag, tags: 'shopping bag purchase product cart transaction store sale' },
  { name: 'ShoppingCart', Component: ShoppingCart, tags: 'shopping cart buy basket market store commerce online sale pay' },
  { name: 'Tag', Component: Tag, tags: 'tag label ticket price discount coupon category metadata sale' },
  { name: 'Gift', Component: Gift, tags: 'gift present surprise ribbon pack box anniversary holiday sale' },
  { name: 'Award', Component: Award, tags: 'award prize medal ribbon premium merit champion honor score certificate' },
  { name: 'Trophy', Component: Trophy, tags: 'trophy champion win first award score prize cup gold merit' },
  { name: 'Briefcase', Component: Briefcase, tags: 'briefcase work job business bag luggage case suitcase employment career' },
  { name: 'CreditCard', Component: CreditCard, tags: 'credit card pay bank transaction money currency cost finance shopping outline' },
  { name: 'DollarSign', Component: DollarSign, tags: 'dollar sign money currency cost cash wealth finance investment sales pay USD' },
  { name: 'Percent', Component: Percent, tags: 'percent discount margin proportion commission stats math division calculation' },
  { name: 'TrendingUp', Component: TrendingUp, tags: 'trending up growth profit chart increase progress metrics positive direction analytics' },
  { name: 'TrendingDown', Component: TrendingDown, tags: 'trending down loss negative decrease chart decline metrics analytics' },
  { name: 'BarChart', Component: BarChart, tags: 'bar chart metrics graph statistics progress analytics dashboards columns' },
  { name: 'BarChart2', Component: BarChart2, tags: 'bar chart 2 horizontal metrics graph statistics analytics dashboards data layout' },
  { name: 'PieChart', Component: PieChart, tags: 'pie chart division portion metrics graph statistics dashboards analytics structure' },
  { name: 'ActivityChart', Component: ActivityChart, tags: 'activity chart analytics live update graph wave tracking frequency' },
  { name: 'Truck', Component: Truck, tags: 'truck shipping delivery transport carriage vehicle cargo logistic commerce' },
  { name: 'Pocket', Component: Pocket, tags: 'pocket secure collect wallet save storage gather asset outline' },
  { name: 'Ticket', Component: Ticket, tags: 'ticket coupon pass code booking movie flight gate access voucher' },
  { name: 'Discount', Component: Discount, tags: 'discount percent tag coupon sale price deal campaign' },
  { name: 'GitHub', Component: GitHub, tags: 'github brand social developer open source code git repository profile outline' },
  { name: 'Twitter', Component: Twitter, tags: 'twitter brand social bird talk post tweet message news outline' },
  { name: 'Facebook', Component: Facebook, tags: 'facebook brand social network contact message sharing community outline' },
  { name: 'Instagram', Component: Instagram, tags: 'instagram brand social camera photo sharing visual network outline' },
  { name: 'Youtube', Component: Youtube, tags: 'youtube brand social video player movie broadcast stream channel outline' },
  { name: 'Linkedin', Component: Linkedin, tags: 'linkedin brand social network career job professional contact message outline' },
  { name: 'Globe', Component: Globe, tags: 'globe earth world map planet navigation browser chrome internet network translation outline' },
  { name: 'Chrome', Component: Chrome, tags: 'chrome browser google internet web online explorer outline' },
  { name: 'Gitlab', Component: Gitlab, tags: 'gitlab brand social repository code version control project git devops' },
  { name: 'GitBranch', Component: GitBranch, tags: 'git branch code fork repository path version control dynamic' },
  { name: 'GitCommit', Component: GitCommit, tags: 'git commit code trace path version control point history node save' },
  { name: 'GitMerge', Component: GitMerge, tags: 'git merge combine branch version control path repository dynamic' },
  { name: 'GitPullRequest', Component: GitPullRequest, tags: 'git pull request code merge collaborate team branch open source repo' },
  { name: 'Slack', Component: Slack, tags: 'slack corporate brand message chat team corporate collaboration workspace' },
  { name: 'Figma', Component: Figma, tags: 'figma brand ui design designer mockup prototype wireframe developer' },
  { name: 'Dribbble', Component: Dribbble, tags: 'dribbble brand design portfolio visual art creative artist showcase' },
  { name: 'Codepen', Component: Codepen, tags: 'codepen brand editor developer code html css script open source online' },
  { name: 'Twitch', Component: Twitch, tags: 'twitch brand stream gamer broadcast dynamic social live video channel' },
  { name: 'Android', Component: Android, tags: 'android brand google phone device mobile screen corporate outline' },
  { name: 'Apple', Component: Apple, tags: 'apple brand device iphone mac ios laptop corporate tablet' },
  { name: 'SunCloud', Component: SunCloud, tags: 'sun cloud sunny partial weather sky temperature climate brightness day' },
  { name: 'CloudRain', Component: CloudRain, tags: 'cloud rain weather storm wet shower forecast climate fluid drops water' },
  { name: 'CloudSnow', Component: CloudSnow, tags: 'cloud snow weather cold winter frost ice crystal forecast' },
  { name: 'CloudLightning', Component: CloudLightning, tags: 'cloud lightning storm thunder hazard weather electricity energy power dangerous' },
  { name: 'CloudDrizzle', Component: CloudDrizzle, tags: 'cloud drizzle mist rain fog climate forecast forecast weather wet drops' },
  { name: 'Wind', Component: Wind, tags: 'wind blow air weather motion draft speed current storm dynamic gas' },
  { name: 'Umbrella', Component: Umbrella, tags: 'umbrella rain weather storm guard protect safety outline' },
  { name: 'Sunrise', Component: Sunrise, tags: 'sunrise sun morning weather dawn rise sky beginning light glow' },
  { name: 'Sunset', Component: Sunset, tags: 'sunset sun evening weather dusk descent sky end dark glow' },
  { name: 'Thermometer', Component: Thermometer, tags: 'thermometer temperature hot cold weather climate scale mercury health fever' },
  { name: 'Compass', Component: Compass, tags: 'compass navigation map travel direction north south grid location outline' },
  { name: 'MapPin', Component: MapPin, tags: 'map pin location target spot address gps navigation tracking point outline' },
  { name: 'Map', Component: Map, tags: 'map navigation direction path route travel atlas paper location outline' },
  { name: 'Navigation', Component: Navigation, tags: 'navigation compass direction map gps tracking target guide travel' },
  { name: 'Navigation2', Component: Navigation2, tags: 'navigation 2 compass direction gps tracking map locator travel' },
  { name: 'Calendar', Component: Calendar, tags: 'calendar date time schedule event task plan year month agenda outline' },
  { name: 'Clock', Component: Clock, tags: 'clock time hour minute schedule watch stop active outline' },
  { name: 'Paperclip', Component: Paperclip, tags: 'paperclip attachment file link bind clip join document metadata list outline' },
  { name: 'Share2', Component: Share2, tags: 'share send distribute network link social forward outline' },
  { name: 'PenTool', Component: PenTool, tags: 'pen tool draw vector design figma bezier curve points custom path' },
  { name: 'Phone', Component: Phone, tags: 'phone call telephone communication contact dial receiver ring' },
  { name: 'PhoneCall', Component: PhoneCall, tags: 'phone call communication contact active signal sound ringing' },
  { name: 'PhoneOff', Component: PhoneOff, tags: 'phone off mute disconnect communication silence reject ban' },
  { name: 'PhoneIncoming', Component: PhoneIncoming, tags: 'phone incoming call communication receive dynamic caller' },
  { name: 'PhoneOutgoing', Component: PhoneOutgoing, tags: 'phone outgoing call communication dial out target proceed' },
  { name: 'MessageSquare', Component: MessageSquare, tags: 'message square chat bubble comment dialogue contact feedback communication' },
  { name: 'MessageCircle', Component: MessageCircle, tags: 'message circle chat round dialogue comment bubble talk contact' },
  { name: 'Coffee', Component: Coffee, tags: 'coffee cup mug drink beverage hot tea steam morning break cafe office' },
  { name: 'Printer', Component: Printer, tags: 'printer print sheet document paper hardware tech corporate machine office' },
  { name: 'Send', Component: Send, tags: 'send forward message mail dispatch paper airplane fly dispatch submit' },
  { name: 'Save', Component: Save, tags: 'save store floppy disk backup database record storage write' },
  { name: 'Scissors', Component: Scissors, tags: 'scissors cut split trim divide office tool craft' },
  { name: 'AtSign', Component: AtSign, tags: 'at sign mail email mention address network contact internet' },
  { name: 'Hash', Component: Hash, tags: 'hash number tag metadata topic category grid key symbol pound' },
  { name: 'Link2', Component: Link2, tags: 'link 2 bind attach hyperlink connection URL address anchor' },
  { name: 'ExternalLink', Component: ExternalLink, tags: 'external link web target redirect out open window navigation url' },
  { name: 'MoreHorizontal', Component: MoreHorizontal, tags: 'more horizontal dots three options config menu details expand list' },
  { name: 'MoreVertical', Component: MoreVertical, tags: 'more vertical dots three options config menu details list expand vertical' },
  { name: 'RotateCw', Component: RotateCw, tags: 'rotate cw reload clockwise repeat spin refresh loop transition' },
  { name: 'RotateCcw', Component: RotateCcw, tags: 'rotate ccw reload counter clockwise undo backup restore reverse repeat' },
  { name: 'Repeat', Component: Repeat, tags: 'repeat loop cycle reload sync clockwise media playlist' },
  { name: 'Infinity', Component: Infinity, tags: 'infinity endless loop forever cycle math continuous limit' },
  { name: 'SlidersControl', Component: SlidersControl, tags: 'sliders configuration control panel adjust volume speed light' },
  { name: 'Download', Component: Download, tags: 'download import fetch receive get save file storage incoming' },
  { name: 'Upload', Component: Upload, tags: 'upload export dispatch send submit cloud server output' }
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
    let codeStr = `<${selectedIconName}\n`;
    codeStr += `  size={${size}}\n`;
    codeStr += `  color="${color}"\n`;
    
    if (selectedIconName === 'LoadingSpinnerIcon' && animation === 'loading') {
      // already default loader
    } else if (animation !== 'none') {
      codeStr += `  animation="${animation}"\n`;
    }

    if (animationDuration !== 0.3 && !(selectedIconName === 'LoadingSpinnerIcon' && animationDuration === 1)) {
      codeStr += `  animationDuration={${animationDuration}}\n`;
    }

    if (hoverEffect) {
      codeStr += `  hoverEffect={true}\n`;
    }

    if (['color-shift', 'glow'].includes(animation)) {
      codeStr += `  hoverColor="${hoverColor}"\n`;
    }
    
    codeStr += `/>`;
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
                placeholder={`🔍 Search ${CATALOG.length} icons instantly... (e.g. arrow, wifi, shopping, eye, brand)`}
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
