import{a7 as o}from"./iframe-ypmT5Gk0.js";import{u as S}from"./useProfileLayout-D5iq4fe4.js";import{u as c,B as g}from"./useBookmarks-C2Dtye9Y.js";import{L as k}from"./Layout-DE_9T14a.js";import{P as x}from"./PageBase-BG5zTY4k.js";import{H as p}from"./Heading-DYP7M4_m.js";import{T as b}from"./Toolbar-DUTfZxxY.js";import{B as I}from"./BookmarkModal-wdvUtOkx.js";import{u as h}from"./useInboxLayout-7xBWDsZr.js";import{u as f}from"./useAccountMenu-DMo6V2Lc.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-LtBxKwOH.js";import"./Bell-3rdYDkRT.js";import"./Bookmark-DWMKWQlk.js";import"./ClockDashed-Bl3VtxuG.js";import"./globalMenu-DQIbpZOu.js";import"./PersonCircle-CEK5UvVl.js";import"./Buildings2-yVipb-QE.js";import"./InboxFill-LG7okZXt.js";import"./MenuGrid-SC6SaCbf.js";import"./MagnifyingGlass-BsJL0696.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-D57uYDfd.js";import"./Trash-CccdzDMj.js";import"./useLayout-BGmzdy0R.js";import"./useLocale-D2edR3nY.js";import"./header-UaYRDxqS.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-Roya_qW1.js";import"./BookmarkSettingsItem-DxxIKrOs.js";import"./QueryLabel-CTgAISS6.js";import"./Plus-Dbutg6U0.js";import"./SettingsItemBase-itMtK-j2.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./ChevronUp-BtRg68CV.js";import"./ChevronDown-BK7qLjN-.js";import"./ChevronRight-3_fnpscT.js";import"./ItemBase-DYa9_HNX.js";import"./ItemLink-rWBtZ4Hb.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./Typography-D_BM_-lf.js";import"./useHighlightedText-BRp5NYS8.js";import"./ContextMenu-D5kYo8B_.js";import"./useDropdownMenuController-Bdups_kS.js";import"./Dropdown-DooXOQKf.js";import"./SearchField-gC-2ROHv.js";import"./FieldBase-BZNWpkh0.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./MenuListItem-aY-AAikt.js";import"./MenuListDivider-p3sa3VdL.js";import"./MenuListHeading-j9n_Lc05.js";import"./MenuItem-CZo5oRhh.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./InformationSquare-BGmi6Zvl.js";import"./MenuElipsisHorizontal-7XqACgFh.js";import"./Pencil-CD1iIUVv.js";import"./SkipLink-Dmj6XsAN.js";import"./CookieBanner-B8k1HGdM.js";import"./Banner-DMBV7tds.js";import"./GlobalHeader-DK4fbfP6.js";import"./useIsDesktop-PxNvtLHb.js";import"./GlobalAccountButton-CQvD92YT.js";import"./Enter-BI3IQ34V.js";import"./GlobalMenuButton-BribFtYh.js";import"./MenuHamburger-DnW-FkzB.js";import"./AccountSelector-oX6erb_P.js";import"./Switch-CfqPQUwK.js";import"./AccountMenu-s3Se8P3c.js";import"./GlobalMenu-BPOeGTHR.js";import"./ArrowUndo-BZUngnyS.js";import"./Globe-CcZbALqM.js";import"./BreadcrumbsLink-B-_mNzdJ.js";import"./ArrowRight-onOHfT1O.js";import"./Footer-BF-O6qkt.js";import"./Flex-Chd0QM3i.js";import"./ButtonGroup-CRz61zp4.js";import"./ButtonGroupDivider-C43QU8jH.js";import"./ChevronUpDown-H2BJflUM.js";import"./ToolbarMenu-D5mSoK9Q.js";import"./ToolbarSearch-BRF9cRq9.js";import"./SettingsModal-NpQrKLMe.js";import"./ModalBody--kpGACBM.js";import"./Section-DHk6b8dD.js";import"./ButtonIcon-DpuhnEWK.js";import"./ButtonLabel-CXIu-UcJ.js";import"./TextField-CCO_4OXa.js";import"./inboxMenu-DtkIlY5e.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
