'use client';
import { ExternalLinkIcon, LeaveIcon, QuestionmarkIcon } from '@navikt/aksel-icons';
import type { SvgElement } from '../../lib/components';
import type { FloatingDropdownProps } from '../../lib/components';

interface UseFloatingDropdownOptions {
  /**
   * Custom handler for the "Show new functionality" action
   */
  onStartTour?: () => void;

  /**
   * Custom handler for the "Help pages" action
   */
  onGoToHelp?: () => void;

  /**
   * Custom handler for the "Exit" action
   */
  onGoBack?: () => void;

  /**
   * Custom icon for the dropdown button
   */
  icon?: SvgElement;

  /**
   * Custom alt text for the dropdown button icon
   */
  iconAltText?: string;

  /**
   * Whether to include the "Show new functionality" item
   */
  includeShowNewFunctionality?: boolean;

  /**
   * Custom text for the "Show new functionality" menu item
   */
  showNewFunctionalityText?: string;

  /**
   * Custom text for the "Help pages" menu item
   */
  helpPagesText?: string;

  /**
   * Custom text for the "Exit" menu item
   */
  exitText?: string;
}

/**
 * Hook that provides props for the FloatingDropdown component
 */
export const useFloatingDropdown = ({
  onStartTour,
  onGoToHelp,
  onGoBack,
  icon = QuestionmarkIcon,
  iconAltText = '?',
  includeShowNewFunctionality = true,
  showNewFunctionalityText = 'Show new functionality',
  helpPagesText = 'Help pages',
  exitText = 'Exit',
}: UseFloatingDropdownOptions = {}): FloatingDropdownProps => {
  const handleStartTour = () => {
    console.log('Start tour clicked');
    onStartTour?.();
  };

  const handleGoToHelp = () => {
    console.log('Help pages clicked');
    onGoToHelp?.();
  };

  const handleGoBack = () => {
    console.log('Exit clicked');
    onGoBack?.();
  };

  const items = [
    ...(includeShowNewFunctionality
      ? [
          {
            icon: QuestionmarkIcon,
            title: showNewFunctionalityText,
            onClick: handleStartTour,
          },
        ]
      : []),
    {
      icon: ExternalLinkIcon,
      title: helpPagesText,
      onClick: handleGoToHelp,
    },
    {
      icon: LeaveIcon,
      title: exitText,
      onClick: handleGoBack,
    },
  ];

  return {
    icon,
    iconAltText,
    items,
  };
};
