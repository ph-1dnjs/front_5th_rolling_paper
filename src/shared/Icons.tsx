import {
  ZoomIn,
  ZoomOut,
  Download,
  SmilePlus,
  Sparkles,
  Users,
  Volume2,
  RotateCw,
  RotateCcw,
  Play,
  Pause,
  X,
  Copy,
  Music4,
  Share2,
  FileMinus,
  Trash2,
  ChevronDown,
} from 'lucide-react';

//Design System에 표기되어있는 순서, 사이즈

export const SparklesIcon = () => {
  return <Sparkles size={32} />;
};

export const CopyIcon = () => {
  return <Copy width={20} height={16} />;
};

export const Share2Icon = () => {
  return <Share2 width={20} height={16} />;
};

export const DownloadIcon = () => {
  return <Download size={16} />;
};

export const SmilePlusIcon = () => {
  return <SmilePlus size={16} />;
};

export const MusicIcon = () => {
  return <Music4 width={18} height={28} />;
};

export const UsersIcon = () => {
  return <Users size={16} />;
};

export const FileMinusIcon = () => {
  return <FileMinus size={16} />;
};

export const RotateCcwIcon = () => {
  return <RotateCcw size={16} />;
};

export const RotateCwIcon = () => {
  return <RotateCw size={16} />;
};

export const ZoomInIcon = () => {
  return <ZoomIn size={24} />;
};

export const ZoomOutIcon = () => {
  return <ZoomOut size={24} />;
};

export const TrashIcon = () => {
  return <Trash2 size={24} />;
};

export const XIcon = () => {
  return <X size={16} />;
};

export const UnderArrowIcon = () => {
  return <ChevronDown size={13} />;
};

export const VolumeIcon = () => {
  return <Volume2 size={16} />;
};

export const PauseIcon = () => {
  return <Pause size={24} />;
};

export const PlayIcon = () => {
  return <Play size={16} />;
};
