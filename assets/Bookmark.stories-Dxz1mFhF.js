import{a7 as o}from"./iframe-CSiNS2_t.js";import{u as S}from"./useProfileLayout-CxenmACJ.js";import{u as c,B as g}from"./useBookmarks-CWPHMZxb.js";import{L as k}from"./Layout-4MupU4k4.js";import{P as x}from"./PageBase-DdDfbJyq.js";import{H as p}from"./Heading-BPvQUGVy.js";import{T as b}from"./Toolbar-Dbt9jT0e.js";import{B as I}from"./BookmarkModal-DZ7ornNu.js";import{u as h}from"./useInboxLayout-D9wCAH2k.js";import{u as f}from"./useAccountMenu-CNsB7N2U.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-l42OMgCw.js";import"./Bell-Dh9-aHAj.js";import"./Bookmark-C2oWAO5H.js";import"./ClockDashed-oEpq6VsW.js";import"./globalMenu-DqJvrWgo.js";import"./PersonCircle-Cvr_mKYq.js";import"./Buildings2-Bb2Esj9m.js";import"./InboxFill-B8orx56-.js";import"./MenuGrid-DWQDEhAW.js";import"./MagnifyingGlass-L16wMwR7.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-Mf-Uju2B.js";import"./Trash-BcSvu00l.js";import"./useLayout-YlZbobqw.js";import"./useLocale-RVVlzlne.js";import"./header-6gG4Ffg7.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DQhM8YBj.js";import"./BookmarkSettingsItem-CUjfX3Ov.js";import"./QueryLabel-D7Xpm9Cm.js";import"./Plus-BIfsBTTp.js";import"./SettingsItemBase-CWcxhBk7.js";import"./ItemMedia-DGv-wSpo.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./ChevronRight-dChxZgZA.js";import"./ItemBase-DDHhwE3C.js";import"./ItemLink-A7alqNSc.js";import"./ItemControls-Cqj4-f4C.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./Typography-tfUHPeKu.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ContextMenu-DaihOZ4w.js";import"./useDropdownMenuController-BLzkNBR-.js";import"./Dropdown-DvIMOq-U.js";import"./SearchField-404uhg7e.js";import"./FieldBase-rPqTSW37.js";import"./Field-dYgOH5Kq.js";import"./Label-p2f33G11.js";import"./Input-BUqwhKEV.js";import"./MenuListItem-BphPPZ1-.js";import"./MenuListDivider-DaQR_cA_.js";import"./MenuListHeading-oP2DliYX.js";import"./MenuItem-EWHoKTTM.js";import"./Checkmark-BXugcN3r.js";import"./ItemLabel-C0x86jDQ.js";import"./InformationSquare-BVqQ7zdO.js";import"./MenuElipsisHorizontal-BPxxMSx9.js";import"./Pencil-qyLug8Jf.js";import"./SkipLink-D3iJ7k61.js";import"./CookieBanner-CKWZWaYc.js";import"./Banner-C2EalFdP.js";import"./GlobalHeader-Y06F2DwT.js";import"./useIsDesktop-BcvSdZS0.js";import"./GlobalAccountButton-DmQDN0wu.js";import"./Enter-BYyrWS8h.js";import"./GlobalMenuButton-QBNdcfTe.js";import"./MenuHamburger-BIDisRNk.js";import"./AccountSelector-BGy-SGuD.js";import"./Switch-DY1HilNX.js";import"./AccountMenu-BhWC5WRF.js";import"./GlobalMenu-BRJU6Z52.js";import"./ArrowUndo-BadzpM_H.js";import"./Globe-i9VwEU5k.js";import"./BreadcrumbsLink-Cu-H3rN3.js";import"./ArrowRight-Dz8Z6Xxm.js";import"./Footer-CLRP89pe.js";import"./Flex-DavaSday.js";import"./ButtonGroup-D1fEqQ1N.js";import"./ButtonGroupDivider-DfTuAjlw.js";import"./ChevronUpDown-C_MVpDOS.js";import"./ToolbarMenu-Dh3kZ0-W.js";import"./ToolbarSearch-DJCiNHBT.js";import"./SettingsModal-CPFHCYMo.js";import"./ModalBody-DOzVYGFR.js";import"./Section-iGjVnzYd.js";import"./ButtonIcon-ZdtxxxtZ.js";import"./ButtonLabel-BCsBDwVV.js";import"./TextField-DL42MY-m.js";import"./inboxMenu-C_5qKV6H.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const xe=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,xe as __namedExportsOrder,ke as default};
