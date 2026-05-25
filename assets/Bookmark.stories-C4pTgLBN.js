import{j as o}from"./iframe-BFO1Hsm7.js";import{u as h}from"./useInboxLayout-CzIeP1H1.js";import{u as j}from"./useAccountMenu-BFW7uhgu.js";import{u as c,B as g}from"./useBookmarks-DGEJXvZp.js";import{L as k}from"./Layout-D-gHpmnQ.js";import{P as x}from"./PageBase-zmsXluPa.js";import{H as p}from"./Heading-BaJonbem.js";import{T as b}from"./Toolbar-eYS2EjXg.js";import{B as I}from"./BookmarkModal-DRyhgW3y.js";import{u as S}from"./useProfileLayout-CqYP0W-Z.js";import"./preload-helper-PPVm8Dsz.js";import"./inboxMenu-C-Gk5g57.js";import"./InboxFill-CpT0xyOA.js";import"./useId-Bk4Ffxqs.js";import"./Plus-CzDIu3KD.js";import"./PersonCircle-DLojyqEs.js";import"./Bookmark-CJbuW2m4.js";import"./Archive-CTVg4aGD.js";import"./Trash-BNKVyqtr.js";import"./InformationSquare-Csa1evZE.js";import"./globalMenu-DmuqYb_d.js";import"./Buildings2-DhoPF_ay.js";import"./MenuGrid-DN8Jqzbv.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./useLayout-DJzKmZbC.js";import"./useLocale-CKZ4LYg3.js";import"./header-AAHp_a5w.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./HeartFill-CbK5EbXL.js";import"./Button-D67YnkXJ.js";import"./tooltip-DUJ67ouq.js";import"./settlingsList.module-DvhJJNuI.js";import"./BookmarkSettingsItem-PO3xAgX2.js";import"./QueryLabel-BnybXsgq.js";import"./SettingsItemBase-DTbuN6sq.js";import"./ChevronUp-DlVSDhFe.js";import"./ChevronDown-zCo1cSZK.js";import"./ChevronRight-CdUbwk3C.js";import"./ItemLink-BjgcGFX2.js";import"./index-q4P8UESO.js";import"./ItemMedia-C5bbkB29.js";import"./XMark-DHT-JiZe.js";import"./Avatar-KSmNIbNE.js";import"./Skeleton-BRac3_14.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./ItemControls-Dko-TfIa.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./Typography-Bd9N_lP-.js";import"./useHighlightedText-BBNMb3RU.js";import"./ContextMenu-0mdRRQji.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Dropdown-DNakKmHK.js";import"./MenuElipsisHorizontal-0YAAkQrN.js";import"./SearchField-BsaRMZXP.js";import"./FieldBase-BLwJwwaJ.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./Checkmark-BeWey6nu.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./Pencil-AXfhse9x.js";import"./SkipLink-DCimeCDr.js";import"./Banner-BkHrm4P6.js";import"./GlobalHeader-DeLiNnPk.js";import"./useIsDesktop-zysGFr7R.js";import"./GlobalAccountButton-CdDGEqm1.js";import"./Enter-BwsZcqun.js";import"./GlobalMenuButton-CN1CEQ6C.js";import"./MenuHamburger-rt2ExzIR.js";import"./AccountSelector-BgiUgb5b.js";import"./AccountMenu-DB3Kg0sC.js";import"./Switch-CJtdm7zY.js";import"./GlobalMenu-CYhbT-0y.js";import"./ArrowUndo-CSUnA5tv.js";import"./Globe-Bjnfe1Wy.js";import"./BreadcrumbsLink-Djqw2xtc.js";import"./ArrowRight-CuiiB8iB.js";import"./Footer-C9scgH_c.js";import"./Flex-QSO1QCFn.js";import"./ChevronUpDown-X5lIP4sr.js";import"./ButtonGroup-VRxYnWM6.js";import"./ButtonGroupDivider-uQMX6KWa.js";import"./ToolbarMenu-BHkHtwFy.js";import"./ToolbarSearch-Dyliippy.js";import"./SettingsModal-DOhzTr3z.js";import"./ModalBody-ZdU_Iwx_.js";import"./Section-D_8M4GBJ.js";import"./ButtonIcon-kFKVjrxN.js";import"./ButtonLabel-0Y2_Ghd1.js";import"./TextField-LW3IKJUT.js";import"./Bell-CCJ_rfrc.js";import"./ClockDashed-bbJ-SAWp.js";const Ie={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=j({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const he=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,he as __namedExportsOrder,Ie as default};
