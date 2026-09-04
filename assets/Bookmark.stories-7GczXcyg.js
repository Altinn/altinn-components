import{a7 as o}from"./iframe-Bg-ykIGY.js";import{u as S}from"./useProfileLayout-ZUqtWArs.js";import{u as c,B as g}from"./useBookmarks-B3tD61fv.js";import{L as k}from"./Layout-CvpjqPJ1.js";import{P as x}from"./PageBase-CSvYyqaG.js";import{H as p}from"./Heading-BKVhZ0mC.js";import{T as b}from"./Toolbar-Ds7FASpd.js";import{B as I}from"./BookmarkModal-CEqo2qhz.js";import{u as h}from"./useInboxLayout-CtEM4bZR.js";import{u as f}from"./useAccountMenu-B-m9fqvm.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CtlcHBEb.js";import"./Bell-CzNMe-B8.js";import"./Bookmark-BZCRMINk.js";import"./ClockDashed-Bghefrp6.js";import"./globalMenu-CZmZJOcT.js";import"./PersonCircle-HQYrmpfh.js";import"./Buildings2-B9RAII3-.js";import"./InboxFill-DTqh6vc6.js";import"./MenuGrid-BPfAt4Cz.js";import"./MagnifyingGlass-D8mkQKeK.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-65IAQloY.js";import"./Trash-D0nu_cWD.js";import"./useLayout-CnZm0k8j.js";import"./useLocale-6q1AmMB-.js";import"./header-ZS_Ira2O.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-TQu19WT_.js";import"./BookmarkSettingsItem-DjB4Rm8F.js";import"./QueryLabel-Dv04T57B.js";import"./Plus-CRKlQLAt.js";import"./SettingsItemBase-DbC3k_m0.js";import"./ItemMedia-CbKN8wGb.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";import"./ItemBase-oVSLgwcy.js";import"./ItemLink-D1jwa25l.js";import"./ItemControls-ChQuM1Jl.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./Typography-DBpPrukr.js";import"./useHighlightedText-pfd0QjZv.js";import"./ContextMenu-55s2ID-Y.js";import"./useDropdownMenuController-Bq5ui6IL.js";import"./Dropdown-BqiaInOV.js";import"./SearchField-BC3zApJG.js";import"./FieldBase-DJSWyb1T.js";import"./Field-CtkuJ2u8.js";import"./Label-Bd0qu7F0.js";import"./Input-DE7Whw6H.js";import"./MenuListItem-mJ40Xt43.js";import"./MenuListDivider-SxHGHgdX.js";import"./MenuListHeading-CGdgP7xn.js";import"./MenuItem-Do53kNn7.js";import"./Checkmark-DLRr0XeX.js";import"./ItemLabel-C7izt9pc.js";import"./InformationSquare-CVG9J0Nh.js";import"./MenuElipsisHorizontal-vrQ73KRy.js";import"./Pencil-CPgt8liN.js";import"./SkipLink-DUZCAgBJ.js";import"./CookieBanner-J5rw2cCh.js";import"./Banner-BGmQv_6w.js";import"./GlobalHeader-0IBksqQV.js";import"./useIsDesktop-CvqDUnjE.js";import"./GlobalAccountButton-DqkYqPmk.js";import"./Enter-Bp_EcGzr.js";import"./GlobalMenuButton-BkpjWEGe.js";import"./MenuHamburger-CVmRJGX8.js";import"./AccountSelector-Djl-K9hW.js";import"./Switch-BMj-uGOR.js";import"./AccountMenu-CWifJSh4.js";import"./GlobalMenu-D6m_y0cV.js";import"./ArrowUndo-DUSAMG1W.js";import"./Globe-Dutz8jhq.js";import"./BreadcrumbsLink-DxhoIpPE.js";import"./ArrowRight-CEIu9B9J.js";import"./Footer-Dq2z0t-4.js";import"./Flex-BQ7Sfa4Q.js";import"./ButtonGroup-D3TFK-sP.js";import"./ButtonGroupDivider-C7_LpWEb.js";import"./ChevronUpDown-CE-Mg8I6.js";import"./ToolbarMenu-HES99ozh.js";import"./ToolbarSearch-D1yAOMTl.js";import"./SettingsModal-DoDAcvH9.js";import"./ModalBody-9RwRyUWe.js";import"./Section-3Ay22gMM.js";import"./ButtonIcon-BN0vPuAv.js";import"./ButtonLabel-DGmLIPRz.js";import"./TextField-C5-1usr1.js";import"./inboxMenu-CEWKRVn4.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
