import{j as o}from"./iframe-DkQPO9ro.js";import{u as h}from"./useInboxLayout-ChRRlSZC.js";import{u as j}from"./useAccountMenu-VhGFIA2t.js";import{u as c,B as g}from"./useBookmarks-IRghSpKU.js";import{L as k}from"./Layout-C9wm3cxr.js";import{P as x}from"./PageBase-PVDRI2R2.js";import{H as p}from"./Heading-Otl-Ib-S.js";import{T as b}from"./Toolbar-DGgwFwWk.js";import{B as I}from"./BookmarkModal-DzAcslCP.js";import{u as S}from"./useProfileLayout-B0wpWrLK.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-LIhxYm33.js";import"./InboxFill-CAHNcSmn.js";import"./useId-CwF4wxTL.js";import"./Plus-DTlIM-KK.js";import"./PersonCircle-EOFyGUwS.js";import"./Bookmark-CKRc-mIU.js";import"./Archive-cVVZTQ-I.js";import"./Trash-C8jSETfh.js";import"./InformationSquare-DS3QJ89x.js";import"./globalMenu-BxtgWRIy.js";import"./Buildings2-TPl-W-Aw.js";import"./MenuGrid-DLVVZ2an.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DoUfOd_L.js";import"./useLocale-CkSteAqX.js";import"./header-DGMFgBuH.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-B2O-pGHr.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-BEq8PBRQ.js";import"./QueryLabel-C4uQfAVe.js";import"./SettingsItemBase-okg423NT.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./ItemLink-z5fThoi9.js";import"./index-BrTdOUlk.js";import"./ItemMedia-CHWY5IG3.js";import"./XMark-5G2rqhrX.js";import"./Avatar-DlrsSRUv.js";import"./Skeleton-8DklmnzK.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./ItemControls-Czqw_jtP.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./ContextMenu-Dd8TL9fD.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Dropdown-DDoGMqNi.js";import"./MenuElipsisHorizontal-BJkqF5yI.js";import"./SearchField-BFSdJUV0.js";import"./FieldBase-BPqKon2e.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./Checkmark-JWLDNW8H.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./Pencil-Asf3rVo6.js";import"./SkipLink-E16yWgeI.js";import"./Banner-Br0WSxiA.js";import"./GlobalHeader-IcwxybF9.js";import"./useIsDesktop-Dz-OMeoK.js";import"./GlobalAccountButton-XS7oC2wJ.js";import"./Enter-YjTQHWom.js";import"./GlobalMenuButton-CSjLcU9z.js";import"./MenuHamburger-CDbgLMEh.js";import"./AccountSelector-CK0TFOGZ.js";import"./heading-Dzxt-Xj0.js";import"./AccountMenu-DFEyY2mN.js";import"./Switch-DagNs5eW.js";import"./GlobalMenu-DAnQblRj.js";import"./ArrowUndo-CchR6_Y_.js";import"./Globe-kuwFCIDb.js";import"./BreadcrumbsLink-BAgWVLB6.js";import"./ArrowRight-BoKSjLde.js";import"./Footer-Bh5XJ8H1.js";import"./Flex-Cy28VffD.js";import"./ChevronUpDown-CVYa19Ee.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonGroupDivider-ff9B_AjZ.js";import"./ToolbarMenu-BM3yaZDN.js";import"./ToolbarSearch-6B-Iqxad.js";import"./SettingsModal-CIbtSnKL.js";import"./ModalBody-GvvO4sGF.js";import"./Section-DUH4Cyq_.js";import"./ButtonIcon-HEZ4yPr4.js";import"./ButtonLabel-teAu4cwf.js";import"./TextField-DUUYp28e.js";import"./Bell-CqR_GCXB.js";import"./ClockDashed-0qd6mo8-.js";const Se={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const fe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,fe as __namedExportsOrder,Se as default};
