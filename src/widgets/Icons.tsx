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

export const sparklesIcon = () => {
  return <Sparkles size={32} />;
};

export const copyIcon = () => {
  return <Copy width={20} height={16} />;
};

export const share2Icon = () => {
  return <Share2 width={20} height={16} />;
};

export const downloadIcon = () => {
  return <Download size={16} />;
};

export const smilePlusIcon = () => {
  return <SmilePlus size={16} />;
};

export const musicIcon = () => {
  return <Music4 width={18} height={28} />;
};

export const usersIcon = () => {
  return <Users size={16} />;
};

export const fileMinusIcon = () => {
  return <FileMinus size={16} />;
};

export const rotateCcwIcon = () => {
  return <RotateCcw size={16} />;
};

export const rotateCwIcon = () => {
  return <RotateCw size={16} />;
};

export const zoomInIcon = () => {
  return <ZoomIn size={24} />;
};

export const zoomOutIcon = () => {
  return <ZoomOut size={24} />;
};

export const trashIcon = () => {
  return <Trash2 size={24} />;
};

export const xIcon = () => {
  return <X size={16} />;
};

export const underArrowIcon = () => {
  return <ChevronDown size={13} />;
};

export const volumeIcon = () => {
  return <Volume2 size={16} />;
};

export const pauseIcon = () => {
  return <Pause size={24} />;
};

export const playIcon = () => {
  return <Play size={16} />;
};
