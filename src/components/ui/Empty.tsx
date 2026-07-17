"use client";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Inbox, TriangleAlert } from "lucide-react";

interface EmptyCustomProps {
  title?: string;
  description?: string;
  content?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  isError?: boolean;
}

export default function EmptyCustom({ title, description, content, size = "md", isError = false }: EmptyCustomProps) {
  const sizes = {
    sm: {
      icon: "w-5 h-5",
      title: "text-sm",
      description: "text-xs",
      spacing: "py-4",
    },
    md: {
      icon: "w-8 h-8",
      title: "text-base",
      description: "text-sm",
      spacing: "py-6",
    },
    lg: {
      icon: "w-12 h-12",
      title: "text-lg",
      description: "text-base",
      spacing: "py-8",
    },
  };

  const current = sizes[size];

  const atributes = {
    icon: isError ? (
      <TriangleAlert className={`${current.icon} text-destructive`} />
    ) : (
      <Inbox className={current.icon} />
    ),
    altText: isError ? "Ícone de erro" : "Ícone de vazio",
    defaultTitle: title || (isError ? "Ocorreu um erro" : "Nenhum resultado encontrado"),
    defaultDescription:
      description || (isError ? "Tente novamente mais tarde" : "Tente ajustar seus filtros ou palavras-chave"),
  };

  return (
    <Empty className={current.spacing}>
      <EmptyHeader>
        <EmptyMedia variant="default">{atributes.icon}</EmptyMedia>

        <EmptyTitle className={current.title}>{atributes.defaultTitle}</EmptyTitle>

        <EmptyDescription className={current.description}>{atributes.defaultDescription}</EmptyDescription>
      </EmptyHeader>

      {content && <EmptyContent>{content}</EmptyContent>}
    </Empty>
  );
}
