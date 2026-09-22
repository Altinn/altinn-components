import{a7 as o}from"./iframe-Ca4u80-y.js";import{u as S}from"./useProfileLayout-COKhyAxp.js";import{u as c,B as g}from"./useBookmarks-DR5t9rO2.js";import{L as k}from"./Layout-CHTHE8No.js";import{P as x}from"./PageBase-yaiqOO1n.js";import{H as p}from"./Heading-DWBFau_k.js";import{T as b}from"./Toolbar-BBERRx06.js";import{B as I}from"./BookmarkModal-sda4Njj2.js";import{u as h}from"./useInboxLayout-BdhVpFOn.js";import{u as f}from"./useAccountMenu-CSlkymXu.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BEhM8FIG.js";import"./Bell-DKISlZtB.js";import"./Bookmark-CYSv2imE.js";import"./ClockDashed-C2nFpDvH.js";import"./globalMenu-BIsbXNB7.js";import"./PersonCircle-D3F1kwzM.js";import"./Buildings2-uRmikzTW.js";import"./InboxFill-YyZrihMR.js";import"./MenuGrid-WlYL4NEv.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-JQjADMnA.js";import"./Trash-CQegPx8Y.js";import"./useLayout-Ba6kbJxS.js";import"./useLocale-CzyhiiL4.js";import"./header-Bf-6t7pt.js";import"./footer-CHAipfpn.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-D83_Vp30.js";import"./BookmarkSettingsItem-DdJQLBl0.js";import"./QueryLabel-beq-TejI.js";import"./Plus-Oh3Xr98D.js";import"./SettingsItemBase-BP_HO1-t.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./ChevronUp-gNqlWqNl.js";import"./ChevronDown-ewsJqjFk.js";import"./ChevronRight-eVASrmJg.js";import"./ItemBase-CQLw8VD6.js";import"./ItemLink-C3-H5hes.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./Typography-DWDEZq_R.js";import"./useHighlightedText-DqjIK10c.js";import"./ContextMenu-Cne7NUId.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./FieldBase-BaoqxAAt.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./InformationSquare-C5WU0eyN.js";import"./MenuElipsisHorizontal-ZgAigsFC.js";import"./Pencil-D8gZucHs.js";import"./SkipLink-CBj3210P.js";import"./CookieBanner-C9aSgqV6.js";import"./Banner-Dc9MSI6P.js";import"./GlobalHeader-DlkkAHQ1.js";import"./useIsDesktop-DM4EaZ7O.js";import"./GlobalAccountButton-B2aUt3kB.js";import"./Enter-CDkzTut5.js";import"./GlobalMenuButton-DIR4PI9u.js";import"./MenuHamburger-D2oXTqoK.js";import"./AccountSelector-QiIXaFT4.js";import"./Switch-DdbPUpTN.js";import"./AccountMenu-2Nuk4Gjc.js";import"./GlobalMenu-0Vc719P-.js";import"./ArrowUndo-DOf__dU6.js";import"./Globe-OIrchniO.js";import"./BreadcrumbsLink-DSNygZEc.js";import"./ArrowRight-D2rxZe9t.js";import"./Footer-BIWGl213.js";import"./Flex-DwGvCXeV.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUpDown-D7s4rO6j.js";import"./ToolbarMenu-NSIS5DTX.js";import"./ToolbarSearch-B76M7lyM.js";import"./SettingsModal-CiFfnuDg.js";import"./ModalBody-BlWXQol1.js";import"./Section-DPESya5-.js";import"./ButtonIcon-CPwlrksd.js";import"./ButtonLabel-DymAo8y_.js";import"./TextField-Bew3xIV0.js";import"./inboxMenu-D2fIfKui.js";const ke={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
