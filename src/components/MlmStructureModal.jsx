import React from 'react';
import { MlmStructureFlowchart } from './MlmStructureFlowchart';

export const MlmStructureModal = ({ isOpen, onClose, onOpenAuth, onShopClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop mlm-modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container mlm-structure-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <MlmStructureFlowchart 
          onOpenAuth={() => {
            onClose();
            onOpenAuth();
          }}
          onShopClick={() => {
            onClose();
            onShopClick?.();
          }}
          isModal={true}
          onCloseModal={onClose}
        />
      </div>
    </div>
  );
};
