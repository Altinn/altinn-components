import{a7 as o}from"./iframe-BtrieXtc.js";import{u as S}from"./useProfileLayout-B15_hGO2.js";import{u as c,B as g}from"./useBookmarks-BAa81cTX.js";import{L as k}from"./Layout-g3w_5Goj.js";import{P as x}from"./PageBase-CF5zmwec.js";import{H as p}from"./Heading-CdtnAJEW.js";import{T as b}from"./Toolbar-Dv9dytwQ.js";import{B as I}from"./BookmarkModal-CexpIG4i.js";import{u as h}from"./useInboxLayout-sOOsQb-3.js";import{u as f}from"./useAccountMenu-JGfUIXgR.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-BilN-GbW.js";import"./Bell-BG-31dmr.js";import"./Bookmark-6BWihtUE.js";import"./ClockDashed-BcQ_Y7Z0.js";import"./globalMenu-t48JvDwV.js";import"./PersonCircle-Cq-RBWU9.js";import"./Buildings2-BeFlXIfB.js";import"./InboxFill-BMaWgsYu.js";import"./MenuGrid-D-RdBwwi.js";import"./MagnifyingGlass-C5aguymI.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-CFC9XJ3c.js";import"./Trash-CK3701XQ.js";import"./useLayout-Dn7YUYKv.js";import"./useLocale-Cs-gVyaD.js";import"./header-BS2AYpd7.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-BNfzuibe.js";import"./BookmarkSettingsItem-DhaGhJ0x.js";import"./QueryLabel-DOFYZ5m_.js";import"./Plus-AauV6il6.js";import"./SettingsItemBase-DWJ69Eh4.js";import"./ItemMedia-eBYq579p.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./ChevronUp-ByxPUPOK.js";import"./ChevronDown-BfacC3TQ.js";import"./ChevronRight-DjbS-LPA.js";import"./ItemBase-BOh1wieW.js";import"./ItemLink-jSdmZiom.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./Typography-BRa08Jyj.js";import"./useHighlightedText-B6dVubhR.js";import"./ContextMenu-D3dKMSB7.js";import"./useDropdownMenuController-DeNWB_nX.js";import"./Dropdown-CPgwwZJ7.js";import"./SearchField-Du6Gz1k6.js";import"./FieldBase-CTDBNJ5K.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuListHeading-D0-5HT2_.js";import"./MenuItem-CHl6gjJ7.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";import"./MenuElipsisHorizontal-26vaDD2T.js";import"./Pencil-xpNMExtu.js";import"./SkipLink-WSt9bEva.js";import"./Banner-BuwvPftE.js";import"./GlobalHeader-DNu-_WvX.js";import"./useIsDesktop-CHsg4d9V.js";import"./GlobalAccountButton-CULHmsvu.js";import"./Enter-DOAWNqFj.js";import"./GlobalMenuButton-fnhEuXTm.js";import"./MenuHamburger-INT75Sb9.js";import"./AccountSelector-CMxxOwzk.js";import"./Switch-BjdFyd00.js";import"./AccountMenu-lnvUR6rC.js";import"./GlobalMenu-zkrYnrbV.js";import"./ArrowUndo-DhKnKyUU.js";import"./Globe-o9O-O-tZ.js";import"./BreadcrumbsLink-Dabr0LDg.js";import"./ArrowRight-C4F-KsN1.js";import"./Footer-B70UoNBF.js";import"./Flex-Dld0WRRq.js";import"./ButtonGroup-CVtevVNY.js";import"./ButtonGroupDivider-DgYHqz8l.js";import"./ChevronUpDown-XBntiFIi.js";import"./ToolbarMenu-DJrp1f2j.js";import"./ToolbarSearch-BIXCj26p.js";import"./SettingsModal-BH3rW1aX.js";import"./ModalBody-B4Te2i-O.js";import"./Section-UNmwoB7j.js";import"./ButtonIcon-nvXcIoKP.js";import"./ButtonLabel-CyEgs9OW.js";import"./TextField-DM_urZ6l.js";import"./inboxMenu-CArzfCAU.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
