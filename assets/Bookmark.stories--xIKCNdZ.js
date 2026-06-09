import{a7 as o}from"./iframe-D6Pw3lmv.js";import{u as S}from"./useProfileLayout-w0wdKoiA.js";import{u as c,B as g}from"./useBookmarks-CXx4aiq4.js";import{L as k}from"./Layout-CwNHuIGl.js";import{P as x}from"./PageBase-aB0nVTZB.js";import{H as p}from"./Heading-Bsu5tLR0.js";import{T as b}from"./Toolbar-u7Qg0RaM.js";import{B as I}from"./BookmarkModal-BHX9BlfV.js";import{u as h}from"./useInboxLayout-D1opcCzU.js";import{u as f}from"./useAccountMenu-Qoe42D3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CgHy8U4l.js";import"./Bell-FB6IfEql.js";import"./Bookmark-DaI5CD2v.js";import"./ClockDashed-4YASebKO.js";import"./globalMenu-D0sKesKO.js";import"./PersonCircle-BTLC5Zvt.js";import"./Buildings2-BaIjKe8w.js";import"./InboxFill-j6jQxy97.js";import"./MenuGrid-DNKVbrWb.js";import"./MagnifyingGlass-xEXh01wv.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CA4pjqQu.js";import"./Trash-B3d5chwP.js";import"./useLayout-LfG23pH5.js";import"./useLocale-CckT707P.js";import"./header-CnTAJo3E.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-AaKLsWFm.js";import"./BookmarkSettingsItem-Cr6vNUAq.js";import"./QueryLabel-DBYtGOs4.js";import"./Plus-yZ7u7aad.js";import"./SettingsItemBase-XkXN956I.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./ChevronRight-DrJyRyMs.js";import"./ItemBase-D25TzUDm.js";import"./ItemLink-J0cRTxzg.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./ContextMenu-BxW7sU72.js";import"./useDropdownMenuController-NInAg9dA.js";import"./Dropdown-DnYymeta.js";import"./SearchField-EcYIPpv0.js";import"./FieldBase-q3f36oGg.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./MenuElipsisHorizontal-Coq-MnNJ.js";import"./Pencil-CawRBz37.js";import"./SkipLink-Dr2pSQlS.js";import"./Banner-sn-Q5tmD.js";import"./GlobalHeader-q-BY9sFU.js";import"./useIsDesktop-7_H-1XDj.js";import"./GlobalAccountButton-FshSIaE5.js";import"./Enter-BA1biyqm.js";import"./GlobalMenuButton-Cp5uiN-M.js";import"./MenuHamburger-DaPB2oTh.js";import"./AccountSelector-CtJq3hwS.js";import"./Switch-DTtTZAwl.js";import"./AccountMenu-CyGLqcYr.js";import"./GlobalMenu-Cw_AcEfT.js";import"./ArrowUndo-EhrKGXZn.js";import"./Globe-BCYHihqy.js";import"./BreadcrumbsLink-DxLhd7PP.js";import"./ArrowRight-C4ZxVRSW.js";import"./Footer-YZCYtUnl.js";import"./Flex-CRGRbwD2.js";import"./ButtonGroup-BukNZ9_Z.js";import"./ButtonGroupDivider-w2z4C3RV.js";import"./ChevronUpDown-CFSIs9pS.js";import"./ToolbarMenu-Ct8b7bjn.js";import"./ToolbarSearch-wV0VxLX8.js";import"./SettingsModal-DtZGdoZV.js";import"./ModalBody-eofliHBo.js";import"./Section-B6MiXL8W.js";import"./ButtonIcon-BZRYAWT7.js";import"./ButtonLabel-Byk5sCAh.js";import"./TextField-1Y0CJPxo.js";import"./inboxMenu-Mnnjx20K.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
